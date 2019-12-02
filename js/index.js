//***DATA */

/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// let course0Name = `Usability Testing 1`;
// let course0Code = `INTR2014`;
// let course0Intstructor = `Nastaran Dadashi`;
// let course0Start = `Fall 2019`;
// let course0Weeks = 15;
// let course0Breaks = `Yes`;
// let course0Duration = 180;

const products = [
    {
        img: `img/dress1.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress2.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress3.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress4.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress5.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress6.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress7.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress8.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress9.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },{
        img: `img/dress10.jpg`
        name: `Calla Blanche`,
        code: '#C127',
        description: 'Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment. The corset-style bodice with boning and bra-cup details and the stencil-sequin-appliqued ball gown skirt are enveloped in a cloud of cascading tulle. Pale pink lining lends warmth and just a hint of colour.',
        designer: 'Vera Wang',
        salePrice: 250,
        regPrice: 575,
        stock: 18,
    },
    
  ];
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
  // Function: getDurationFromMinutes
  // Parameters: minutes:Number
  // Returns: String: H hrs, M mins
  function getDurationFromMinutes(minutes) {
    
    return ``;
  }
  
  // Function: getCourseAsHtmlString
  // Parameters: course:Object
  // Return: String of HTML (<article>)
  function getCourseAsHtmlString(course) {
  
    return `<article class="course ${course.category}">
      <h3>${course.name}</h3>
      <img src="${course.img}" alt="Logo for ${course.name}" class="product-img">
      <ul class="course-info">
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.semester} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${course.break}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${course.duration}</strong></li>
      </ul>
    </article>`;
  }
  
  // Add or remove ("toggle") the .column-view class on the layout
  // Function: switchLayout
  // Parameters: none
  // Return: none
  function switchLayout() {
    document.getElementById('courses').classList.toggle('column-view');
  }
  
  // Put all items of a supplied Array into the document
  // Function: renderCourses
  // Parameters: arr:Array
  // Return: none
  function renderCourses(arr) {
    // 1. map() the Array through getCourseAsHtmlString into a new Array
    const arrOfHtml = arr.map(getCourseAsHtmlString)
  
    // 2. join() the new Array into a single String of HTML
    const strOfHtml = arrOfHtml.join('\n')
  
    // 3. Put the String into the innerHTML of the document's #courses
    document.getElementById('courses').innerHTML = strOfHtml;
  }
  
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  
  // Render the first 3 products
  renderCourses(courses.slice(0, 3));
  
  // Find the layout <button>, add a "listener" to wait for a click, then call switchLayout()
  document.getElementById('layout').addEventListener('click', event => switchLayout() )
  
  
  
  
  ///////////// NOW YOU SHOULD:
  // Increase list of items to at least 10 (all should be very different)
  //   Notes: If a property doesn't have/need a value for one element, give it a value of `null`
  // A click event that does something (loads products, adds a class, etc)
  // Style for various product states (limited supply, unavailable, categories, sale, clearance, etc)
  // Ensure pagination list (page numbers) is styled
  // Print only the first 5 products