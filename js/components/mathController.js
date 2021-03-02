import MathService from "./mathService.js";

const _ms = new MathService()

function drawCourses() {
  let template = _ms.Courses.coursesTemplate()
  document.querySelector('#insert-courses').innerHTML = template
}

//Public
export default class MathController {
  constructor() {
    _ms.addSubscriber('courses', drawCourses)
    _ms.getCourses()
  }

}