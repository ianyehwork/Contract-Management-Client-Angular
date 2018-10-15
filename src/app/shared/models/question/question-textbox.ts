import { QuestionBase } from './question-base';
/**
 * The object model that support multiple HTML5 <input> types.
 */
export class TextboxQuestion extends QuestionBase<string> {

  /**
   * This field is used to render the <input> tag
   */
  controlType = 'textbox';

  /**
   * This field is used to bind the type attribute.
   * All available attributes can be found under:
   * https://www.w3schools.com/tags/att_input_type.asp
   */
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
