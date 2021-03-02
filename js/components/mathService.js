import Courses from "../models/math.js";
import PdfData from "../pdf-data.js";

const _ms = new PdfData()

let _state = {
  courses: {}
}

let _subscribers = {
  courses: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//Public
export default class MathService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Courses() {
    return _state.courses
  }

  getCourses() {
    let data = _ms.pdfData()
    _setState('courses', new Courses(data))
  }

}