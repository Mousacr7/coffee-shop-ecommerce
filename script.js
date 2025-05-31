// Loading screen logic
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 2500);
  }, 2000);
});

// Mobile nav toggle logic
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");

openBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
  cartSidebar.classList.remove("open")
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// close the bar when click in li
document.querySelectorAll("navlink").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        document.body.style.overflow = ""
    })
});

// MAKE THE HEADER STIKEY
const navBar = document.getElementById('navBar')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
    
    // Back to Top Button//
    const backToTop = document.querySelector('#backToTop');
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Current Time and Date
      function updateDateTime() {
      const now = new Date();
      const timeElement = document.getElementById('current-time');
      const dateElement = document.getElementById('current-date');

      let hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutes = now.getMinutes().toString().padStart(2, '0');
      timeElement.textContent = `${hours}:${minutes} ${ampm}`;

      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      dateElement.textContent = now.toLocaleDateString('en-US', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 60000);

    // MENU ITMES//
    const tabButtons = document.querySelectorAll(".tab-btn");
    const menuItemsContainer = document.querySelector(".menu-items");

    const menuData = {
    coffee: [
      {
        id: 1,
        name: "Espresso",
        price: 3.50,
        description: "A strong, concentrated coffee served in a small cup",
        rating: "★★★★★",
        image:"./image/Espresso.jpg"
    },
      {
        id: 2,
        name: "Cappuccino",
        price: 4.50,
        description: "Espresso with steamed milk and a silky layer of foam",
        rating: "★★★★☆",
        image:"./image/Cappuccino.jpg"
  },
      {
        id: 3,
        name: "Latte",
        price: 4.75,
        description: "Espresso with a lot of steamed milk and a light layer of foam",
        rating: "★★★★☆",
        image:"./image/Latte.jpeg"
      },      {
        id: 4,
        name: "Americano",
        price: 3.75,
        description: "Espresso diluted with hot water for a smoother taste",
        rating: "★★★☆☆",
        image:"./image/Americano.jpg"
     },
      {
        id: 5,
        name: "Mocha",
        price: 5.00,
        description: "Espresso with chocolate and steamed milk, topped with whipped cream",
        rating: "★★★★★",
        image:"./image/Mocha.jpg"
      },      {
        id: 6,
        name: "Cold Brew",
        price: 4.25,
        description: "Smooth coffee brewed cold for 12 hours for low acidity",
        rating: "★★★★☆",
        image:"./image/Cold-Brew.jpeg"
     }
    ],
    tea: [
      {
        id: 7,
        name: "Earl Grey",
        price: 3.00,
        description: "Classic black tea with bergamot flavor",
        rating: "★★★★☆",
        image:"./image/Earl-Grey.jpeg"
     },
      {
        id: 8,
        name: "Chamomile",
        price: 3.00,
        description: "Soothing herbal tea perfect for relaxation",
        rating: "★★★☆☆",
        image:"./image/Chamomile.jpeg"
     },
      {
        id: 9,
        name: "Green Tea",
        price: 3.25,
        description: "Light and refreshing with antioxidants",
        rating: "★★★★☆",
        image:"./image/Green-Tea.jpeg"
     },
      {
        id: 10,
        name: "Chai Latte",
        price: 4.50,
        description: "Spiced tea with steamed milk for a creamy texture",
        rating: "★★★★★",
        image:"./image/Chai-Latte.jpeg"
  }
    ],
    pastries: [
      {
        id: 11,
        name: "Croissant",
        price: 3.50,
        description: "Buttery, flaky pastry perfect with any coffee",
        rating: "★★★★★",
        image: "./image/Croissant.jpg"
     },
      {
        id: 12,
        name: "Blueberry Muffin",
        price: 3.75,
        description: "Moist muffin packed with fresh blueberries",
        rating: "★★★★☆",
        image:"./image/Blueberry-Muffin.jpg"
      },
      {
        id: 13,
        name: "Cinnamon Roll",
        price: 4.25,
        description: "Sweet roll with cinnamon sugar and icing",
        rating: "★★★★★",
        image:"./image/Cinnamon-Roll.jpg"
     },
      {
        id: 14,
        name: "Chocolate Chip Cookie",
        price: 2.75,
        description: "Classic cookie with melty chocolate chips",
        rating: "★★★★☆",
        image:"./image/Chocolate-Chip-Cookie.jpeg"
      }
    ]
  };
  
  // Function to render menu items
  function renderMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    menuData[category].forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.innerHTML = `
       <div class="menu-image">
  <img src="${item.image}" alt="${item.name}"/>
  </div>
  <div class="menu-content">
  <div class="menu-title">
  <h3>${item.name}</h3>
  <span class="menu-price price">$${item.price}</span>
  <p>${item.description}</p>
  </div>
  <div class="menu-footer">
  <button class="add-to-cart"data-id=${item.id} data-name=${item.name} data-price=${item.price} data-image="${item.image}">Add to Cart
</button>
<div class="rating">${item.rating}</div>
  </div>
  </div>
      `;
      menuItemsContainer.appendChild(menuItem);
    });  // Add event listeners to the new add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', addToCart);
    });
  }


  renderMenuItems('coffee');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Render the corresponding menu
      renderMenuItems(button.dataset.category);
    });
  });
  
  const productsContainer = document.querySelector(".products");

  const products = [
     {
      id: 101,
      name: "Ethiopian Yirgacheffe",
      price: 14.99,
      description: "Light roast with floral and citrus notes",
      rating: "★★★★☆",
      image:"./image/Ethiopian-Yirgacheffe.jpg"
 
 },
    {
      id: 102,
      name: "Colombian Supremo",
      price: 12.99,
      description: "Medium roast with caramel and nutty flavors",
      rating: "★★★★★",
      image:"./image/Colombian-Supremo.jpeg"
    }    ,
    {
      id: 103,
      name: "Sumatra Mandheling",
      price: 15.99,
      description: "Dark roast with earthy and chocolatey tones",
      rating: "★★★★☆",
      image:"./image/Sumatra-Mandheling.jpeg"
 
    },    {
      id: 104,
      name: "French Press",
      price: 24.99,
      description: "Perfect for brewing rich, full-bodied coffee",
      rating: "★★★★☆",
      image:"./image/French-Press.jpeg"
 
  },
    {
      id: 105,
      name: "Pour Over Kit",
      price: 29.99,
      description: "Everything you need for the perfect pour over",
      rating: "★★★☆☆",
      image:"./image/Pour-Over-Kit.jpeg"
    }
    ,
    {
      id: 106,
      name: "Coffee Mug Set",
      price: 19.99,
      description: "Set of 2 premium ceramic coffee mugs",
      rating: "★★★★☆",
      image:"./image/Coffee-Mug-Set.jpeg"
 
    }
 ];
// Render product
 products.forEach( card => {
  const product = document.createElement("div")
  product.className = 'product'
  product.innerHTML = `
  <div class="product-image">
  <img src="${card.image}" alt="${card.name}"/>
  </div>
  <div class="product-content">
  <div class="product-title">
  <h3>${card.name}</h3>
  <span class="product-price price">$${card.price}</span>
  <p>${card.description}</p>
  </div>
  <div class="product-footer">
  <button class="add-to-cart"data-id=${card.id} data-name=${card.name} data-price=${card.price} data-image="${card.image}">Add to Cart
</button>
<div class="rating">${card.rating}</div>
  </div>
  </div>
  `;
  productsContainer.appendChild(product);
 })

// addTocart 
document.querySelectorAll(".products .add-to-cart").forEach(button => {
  button.addEventListener("click",addToCart)
})
// Shopping Cart Functionality
const cartIcon = document.getElementById("cartIcon")
const cartSidebar = document.querySelector('.cart-sidebar');
  const closeCart = document.getElementById('closeCart');
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotalElement = document.getElementById('cartTotal');
  const cartCountElement = document.querySelector('.cart-count');
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Update cart count
  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
  }
  
  // Update cart total
  function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }
  
  // Render cart items
  function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      updateCartTotal()
      updateCartCount()
      return;
    }
    
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
      <div class="cart-item-img">
      <span class="remove-item" data-id="${item.id}">&times;</span>
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">
            <h4>${item.name}</h4>
          </div>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus" data-id="${item.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn plus" data-id="${item.id}">+</button>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners to remove and quantity buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', removeFromCart);
    });
    
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
      button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
      button.addEventListener('click', increaseQuantity);
    });
    
    updateCartCount();
    updateCartTotal();
  }
  
  // Add to cart function
  function addToCart(e) {
    const id = parseInt(e.target.dataset.id);
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);
    const image = e.target.dataset.image;
    console.log(image)
    
    // Check if item already in cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
      // Increase quantity
      existingItem.quantity += 1;
    } else {
      // Add new item
      cart.push({
        id,
        name,
        price,
        image,
        quantity: 1
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
    
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'cart-success-msg';
    successMsg.textContent =` ${name} added to cart`;
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
      console.log(successMsg)
      successMsg.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      successMsg.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(successMsg);
      }, 300);
    }, 2000);
  }
  
  // Remove from cart
  function removeFromCart(e) {
    const id = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== id);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
  }
  
  // Decrease quantity
  function decreaseQuantity(e) {
    const id = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === id);
    
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart = cart.filter(item => item.id !== id);
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
  }
  
  // Increase quantity
  function increaseQuantity(e) {
    const id = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === id);
    item.quantity += 1;
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    renderCartItems();
  }
  
  // Toggle cart sidebar
  
  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
      navLinks.classList.remove("active")
        document.body.style.overflow = ""
  });

  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    
  });
  
  
  // Initialize cart
  renderCartItems();

// reviw section 

const reviwsContainer = document.querySelector('.reviews-item');

const reviewsData = [
     {
      id: 1,
      content: "The best coffee I've ever had! The atmosphere is cozy and the staff is friendly. I come here every morning before work.",
      author: "Sarah Johnson",
      role: "Regular Customer",
      image:"./image/Sarah.jpg"
  },
    {
      id: 2,
      content: "As a coffee connoisseur, I can confidently say that Musa's Coffee serves exceptional quality. Their beans are always fresh and perfectly roasted.",
      author: "Michael Chen",
      role: "Coffee Enthusiast",
      image:"./image/Michael.jpg"
  },
    {
      id: 3,
      content: "I love working from Musa's Coffee. Great WiFi, delicious pastries, and of course, amazing coffee. It's my go-to spot for productivity.",
      author: "Emily Rodriguez",
      role: "Freelance Designer",
      image:"./image/Emily.jpg"
  }
  ];

  reviewsData.forEach(reviews => {
   const review = document.createElement('div');
   review.className = "review-item";
   review.innerHTML = `
   <div class="review-content">
 <div class="review-image">
   <img src="${reviews.image}" alt="${reviews.author}" />
</div>
<div class="review-title">
<h1 class=" ">${reviews.author}</h1>
<h3>${reviews.role}</h3>
</div>
</div>
<p class="review-desc">${reviews.content}</p>

   `;
   reviwsContainer.appendChild(review)
  });

let currentReview = 0;
const reviews = document.querySelectorAll(".review-item");

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.remove('active');
  });

  reviews[index].classList.add('active');
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

showReview(currentReview);
setInterval(nextReview, 5000);



  // next review functionaly use % in slide mean reapet in the last arr elm

  function nextReview(){
    currentReview = (currentReview + 1 ) % reviews.length;
    showReview(currentReview)
  }
  showReview(currentReview);
//  next reivew in  5 sec
setInterval(nextReview, 5000)

// subscribe form
const form = document.querySelector(".subscribe-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = this.querySelector("input").value;
  console.log("email:", email);

  const successMsg = document.createElement("div");
  successMsg.className = "success-msg";
  successMsg.textContent = "Thanks for subscribing!";
  this.parentNode.appendChild(successMsg);

  // Animate message in
  setTimeout(() => {
    successMsg.classList.add("show");
  }, 10);

  // Animate out and remove
  setTimeout(() => {
    successMsg.classList.remove("show");
    setTimeout(() => {
      successMsg.remove();
    }, 300);
  }, 3000);

  this.reset();
});

