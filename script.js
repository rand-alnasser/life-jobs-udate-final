
var products = [
  {
    name: "كاشير مركز تجاري",
    name2: "Shopping center cashier",
    loca: "Location: Dammam",
    image: "image/panda.jpeg",
    price: 2500
  },
  {
    name: "مهندس برمجيات",
    name2: "Software Engineer",
    loca: "Location: Abha",
    image: "image/cod.avif",
    price: 6000
  },{
    name: "موظف أستقبال",
    name2: "Receptionist",
    loca: "Location: Riyadh",
    image: "image/hotel.avif",
    price: 3000
  },{
    name: "ممرضة",
    name2: "nurse",
    loca: "Location: Abha",
    image: "image/hostpital.png",
    price: 2700
  },{
    name: "مراقب الائتمان",
    name2: "Credit Controller",
    loca: "Location: Dammam",
    image: "image/credit.jpeg",
    price: 4000
  },{
    name: "محلل مالي",
    name2: "Financial Analyst",
    loca: "Location: mecca",
    image: "image/eye.jpg",
    price: 3500
  },{
    name: "ممثل مبيعات",
    name2: "Sales representative",
    loca: "Location: Medina",
    image: "image/cima.jpg",
    price: 1300
  },{
    name: "مدير حسابات",
    name2: "Account Manager",
    loca: "Location: Riyadh",
    image: "image/eye.jpg",
    price: 5000
  },{
    name: "مندوب مبيعات",
    name2: "sales representative",
    loca: "Location: Jizan",
    image: "image/5a93beb3c655a_123.jpg",
    price: 2000
  },{
    name: "مدير تسويق",
    name2: "Marketing  Manager",
    loca: "Location: Jizan",
    image: "image/59e6001b340cb_Careem.png",
    price: 4200
  }
];

var productListElement = document.getElementById("product-list");
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

// عرض المنتجات على الصفحة
function displayjobs() {
  productListElement.innerHTML = ""; // Clear previous product list

  products.forEach(function(product) {
    var productElement = document.createElement("div");
    productElement.className = "product";
    productElement.id = product.name.toLowerCase(); // Set element ID for searching

    var imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.onclick = function() {
      displayDetails(product.details);
    };

    var nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
    nameElement.classList.add("product-name");

    var nameElement2 = document.createElement("h3");
    nameElement2.textContent = product.name2;
    nameElement2.classList.add("product-name");

    var loca = document.createElement("p");
    loca.textContent = product.loca;

    var priceElement = document.createElement("p");
    priceElement.textContent = "المرتب: " + product.price + " ريال";

    var detailsButton = document.createElement("button");
    detailsButton.textContent = "تفاصيل العمل"; 
    detailsButton.classList.add("job-details");
    detailsButton.onclick = function() {
      displayDetails(product.details);
    };
    var detailsButton2 = document.createElement("button");
    detailsButton2.textContent = "التقديم للعمل"; 
    detailsButton2.classList.add("job-apply");
    detailsButton2.onclick = function() {
      appllly(product.details);
    };



    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(nameElement2);
    productElement.appendChild(loca);
    productElement.appendChild(priceElement);
    productElement.appendChild(detailsButton);
    productElement.appendChild(detailsButton2);
    productListElement.appendChild(productElement);
  });
}

// عرض تفاصيل المنتج
function displayDetails(details) {
  //header('Location: details-software engineer.html');
  window.location.href = "C:\\xampp\\htdocs\\cv\\details-software engineer.html";
}
function appllly(details) {
  Swal.fire({
    title: 'تم التسجيل بنجاح',
    text: details,
    icon: 'success',
    confirmButtonText: 'حسنًا'
  });
}
// البحث عن المنتجات بواسطة اسم المنتج
function searchProducts() {
  var searchQuery = searchInput.value.trim().toLowerCase();

  products.forEach(function(product) {
    var productElement = document.getElementById(product.name.toLowerCase());

    if (product.name.toLowerCase().includes(searchQuery) || product.name2.toLowerCase().includes(searchQuery)) {
      productElement.style.display = "block"; // Show matching product
    } else {
      productElement.style.display = "none"; // Hide non-matching product
    }
  });
}

// تعيين دالة البحث عند النقر على الزر
searchButton.addEventListener("click", searchProducts);

// تعيين دالة البحث عند الضغط على زر Enter في حقل البحث
searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchButton.click();
  }
});

// عرض جميع المنتجات عند بدء التحميل
displayjobs();