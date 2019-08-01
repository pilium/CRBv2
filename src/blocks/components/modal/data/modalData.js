export const questionTemplate = `
	<fieldset class="fieldset">
		<div class="fieldset__wrapper" data-step-count="2">
			<legend class="fieldset__legend">Напишите ваш вопрос</legend>
			<div class="input-text"><label class="input-text__label"
					for="question-theme">Тема вашего вопроса:<strong
						class="input-text__required"> *</strong></label>
				<div class="input-text__wrap"><svg
						class="icon icon-accept input-text__validation-icon icon-valid"
						tabindex="-1" role="img">
						<use xlink:href="img/sprites/sprite.svg#accept"></use>
					</svg><svg
						class="icon icon-error input-text__validation-icon icon-invalid"
						tabindex="-1" role="img">
						<use xlink:href="img/sprites/sprite.svg#error"></use>
					</svg><input class="input-text__input" type="text"
						name="question-theme" id="question-theme"
						aria-describedby="questionThemehelp"
						placeholder="Введите тему вопроса"
						required="required" /></div><small
					class="input-text__helper" id="questionThemehelp"
					aria-live="polite">текст подсказки</small>
			</div>
			<div class="input-text"><label class="input-text__label"
					for="question-text">Тема вашего вопроса:<strong
						class="input-text__required"> *</strong></label>
				<div class="input-text__wrap"><svg
						class="icon icon-accept input-text__validation-icon icon-valid"
						tabindex="-1" role="img">
						<use xlink:href="img/sprites/sprite.svg#accept"></use>
					</svg><svg
						class="icon icon-error input-text__validation-icon icon-invalid"
						tabindex="-1" role="img">
						<use xlink:href="img/sprites/sprite.svg#error"></use>
					</svg><textarea class="input-text__input"
						name="question-text" id="question-text"
						aria-describedby="questionTexthelp"
						placeholder="Введите текст вопроса" required="required"
						cols="30" rows="20"></textarea></div><small
					class="input-text__helper" id="questionTexthelp"
					aria-live="polite">текст подсказки</small>
			</div>
		</div>
	</fieldset>
`;
