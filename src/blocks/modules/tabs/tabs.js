/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
if (document.querySelector('.tabs__list')) {
	const a11yTabs = (function tabsComponentIIFE(global, document) {
		const tabInstances = new WeakMap();

		const TabComponent = function TabComponent(element, options) {
			if (!element || !element.nodeType) {
				throw new Error('The DOM element was not found when creating the tab component');
			}
			const defaults = {
				tabList: '.tabs__list',
				tabItem: '.tabs__item',
				tabLink: '.tabs__link',
				tabPanel: '.tabs__panel',
			};

			this.options = Object.assign(defaults, options);

			this.element = element;
			this.tabList = element.querySelector(this.options.tabList);
			this.tabItems = [].slice.call(this.tabList.querySelectorAll(this.options.tabItem));
			this.tabLinks = [].slice.call(this.tabList.querySelectorAll(this.options.tabLink));
			this.tabPanels = [].slice.call(element.querySelectorAll(this.options.tabPanel));

			this.currentIndex = 0;

			this.tabList.setAttribute('role', 'tablist');

			this.tabItems.forEach((item, index) => {
				if (index === 0) {
					item.classList.add('tabs__item--active');
				}
			});

			this.tabLinks.forEach((item, index) => {
				item.setAttribute('id', `tab${index}`);

				if (index > 0) {
					item.setAttribute('tabindex', '-1');
				} else {
					item.setAttribute('aria-selected', 'true');
				}
			});

			this.tabPanels.forEach((item, index) => {
				item.setAttribute('aria-labelledby', `tab${index}`);
				item.setAttribute('tabindex', '-1');

				if (index > 0) {
					item.setAttribute('hidden', '');
				}
			});

			this.eventCallback = handleEvents.bind(this);
			this.tabList.addEventListener('click', this.eventCallback, false);
			this.tabList.addEventListener('keydown', this.eventCallback, false);

			tabInstances.set(this.element, this);
		};

		TabComponent.prototype = {
			handleTabInteraction: function handleTabInteraction(index, direction) {
				const currentIndex = this.currentIndex;
				let newIndex = index;

				// The click event does not pass in a direction. This is for keyboard support
				if (direction) {
					if (direction === 37) {
						newIndex = index - 1;
					} else {
						newIndex = index + 1;
					}
				}

				// Supports continuous tabbing when reaching beginning or end of tab list
				if (newIndex < 0) {
					newIndex = this.tabLinks.length - 1;
				} else if (newIndex === this.tabLinks.length) {
					newIndex = 0;
				}

				// update tabs
				this.tabLinks[currentIndex].setAttribute('tabindex', '-1');
				this.tabLinks[currentIndex].removeAttribute('aria-selected');
				this.tabItems[currentIndex].classList.remove('tabs__item--active');

				this.tabLinks[newIndex].setAttribute('aria-selected', 'true');
				this.tabItems[newIndex].classList.add('tabs__item--active');
				this.tabLinks[newIndex].removeAttribute('tabindex');
				this.tabLinks[newIndex].focus();

				// update tab panels
				this.tabPanels[currentIndex].setAttribute('hidden', '');
				this.tabPanels[newIndex].removeAttribute('hidden');

				this.currentIndex = newIndex;

				return this;
			},

			handleTabpanelFocus: function handleTabPanelFocus(index) {
				this.tabPanels[index].focus();

				return this;
			},
		};

		function createTabComponent(selector, options) {
			const element = document.querySelector(selector);

			return tabInstances.get(element) || new TabComponent(element, options);
		}

		function destroyTabComponent(element) {
			if (!element || !element.nodeType) {
				throw new Error('The DOM element was not found when deleting the tab component');
			}

			let component = tabInstances.get(element);

			component.tabItems.forEach((item, index) => {
				if (index === 0) {
					item.classList.remove('tabs__item--active');
				}
			});

			component.tabLinks.forEach((item, index) => {
				item.removeAttribute('id', `tab${index}`);

				if (index > 0) {
					item.removeAttribute('tabindex', '-1');
				} else {
					item.removeAttribute('aria-selected', 'true');
				}
			});

			component.tabPanels.forEach((item, index) => {
				item.removeAttribute('aria-labelledby', `tab${index}`);
				item.removeAttribute('tabindex', '-1');

				if (index > 0) {
					item.removeAttribute('hidden');
				}
			});

			component.tabList.removeEventListener('click', component.eventCallback);
			component.tabList.removeEventListener('keydown', component.eventCallback);
			tabInstances.delete(component.element);
		}

		function handleEvents(event) {
			if (event.type === 'click') {
				event.preventDefault();
				TabComponent.prototype.handleTabInteraction.call(this, this.tabLinks.indexOf(event.target));
			}

			if (event.type === 'keydown') {
				const index = this.tabLinks.indexOf(event.target);

				// Left and right arrows
				if (event.which === 37 || event.which === 39) {
					event.preventDefault();
					TabComponent.prototype.handleTabInteraction.call(this, index, event.which);
				}

				// Down arrow
				if (event.which === 40) {
					event.preventDefault();
					TabComponent.prototype.handleTabpanelFocus.call(this, index);
				}
			}
		}

		return {
			create: createTabComponent,
			destroy: destroyTabComponent,
		};
	})(window, document);

	const tabComponent = a11yTabs.create('[data-tab-component]');
}