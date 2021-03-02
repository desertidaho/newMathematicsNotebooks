export default class Courses {
  constructor(data) {
    this.coursesArray = data;
  }

  coursesTemplate() {
    let template = ""
    for (let i = 0; i < this.coursesArray.length; i++) {
      template += `
          <div class="col-lg-6" onclick="change(${this.coursesArray[i].pdf})">
            <a class="portfolio-item" href="#pdflink">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">${this.coursesArray[i].title}</div>
                    <p class="mb-0">${this.coursesArray[i].description}</p>
                </div>
              </div>
              <img class="img-fluid" src="img/black.jpg" alt="">
            </a>
          </div>
      `
    }
    return template
  }

}