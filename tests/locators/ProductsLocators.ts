export class ProductsLocators {

    // Home Page
    // TC8 - Home Page
homePageText =
    "//img[@alt='Website for automation practice']";



   


    productsList =
        "//div[@class='features_items']//div[contains(@class,'product-image-wrapper')]";

   


         // =========================================================
    // PRODUCT DETAIL
    // =========================================================

    productDetailText =
        "//div[contains(@class,'product-information')]";

    productName =
        "//div[contains(@class,'product-information')]//h2";

    productCategory =
        "//div[contains(@class,'product-information')]//p[contains(text(),'Category:')]";

    productPrice =
        "//div[contains(@class,'product-information')]//span[contains(text(),'Rs.')]";

    productAvailability =
    "//p[contains(normalize-space(),'Availability:')]";

    productCondition =
         "//p[contains(normalize-space(),'Condition:')]";

     productBrand =
         "//div[contains(@class,'brands_products')]//h2[contains(text(),'Brands')]";




    // TC18 Step 3 - Categories heading
    categoriesText = "//h2[normalize-space()='Category']";

    // TC18 Step 4 - Women category
    womenCategory =
        "//a[@href='#Women']";

    // TC18 Step 5 - Dress sub-category
    womenDressCategory =
        "//div[@id='Women']//a[contains(text(),'Dress')]";

    // TC18 Step 6 - Women Dress Products heading
    womenDressProductsText =
        "//h2[contains(normalize-space(),'Women - Dress Products')]";

    // TC18 Step 7 - Men Category
    menCategory =
        "//a[@href='#Men']";

    // TC18 Step 7 - Men T-Shirts Sub-category
    menTshirtsCategory =
        "//div[@id='Men']//a[contains(text(),'Tshirts')]";

    // TC18 Step 8 - Men Tshirts Products heading
    menTshirtsProductsText =
        "//h2[contains(normalize-space(),'Men - Tshirts Products')]";

    // TC19 Step 3
    productsButton = "//a[@href='/products']";

    // TC19 Step 4 - Brands heading
    brandsText =
        "//h2[normalize-space()='Brands']";

    // TC19 Step 5 - Polo brand
    poloBrand =
        "//a[contains(@href,'/brand_products/Polo')]";

    // TC19 Step 6 - Polo brand page heading
    poloBrandProductsText =
        "//h2[contains(normalize-space(),'Brand - Polo Products')]";

    // TC19 Step 7 - H&M brand
    hmBrand =
        "//a[contains(@href,'/brand_products/H&M')]";

    // TC19 Step 8 - H&M brand page heading
    hmBrandProductsText =
        "//h2[contains(normalize-space(),'Brand - H&M Products')]";


        //TC 20 step 4 ALL PRODUCTS heading
allProductsText =
    "//h2[normalize-space()='All Products']";

    // TC20 Step 5 - Search input
    searchProductInput =
        "//input[@id='search_product']";

    // TC20 Step 5 - Search button
    searchProductButton =
        "//button[@id='submit_search']";

    // TC20 Step 6 - SEARCHED PRODUCTS heading
    searchedProductsText =
        "//h2[normalize-space()='Searched Products']";

    // TC20 Step 7 - Searched product cards
    searchedProductCards =
        "//div[@class='features_items']//div[@class='product-image-wrapper']";

    // TC20 Step 8 - Add to cart buttons in searched products
    searchedProductAddToCartButtons =
    "//div[@class='features_items']//div[@class='productinfo text-center']//a[contains(@class,'add-to-cart')]"; 

    // TC20 Step 9 - Products in cart
    cartProductRows =
        "//table[@id='cart_info_table']/tbody/tr";

        // TC21 Step 5 - First View Product
firstViewProduct =
    "(//a[contains(text(),'View Product')])[1]";

        // TC21 Step 6 - Write Your Review
writeYourReviewText =
    "//a[normalize-space()='Write Your Review']";

    // TC21 Step 7 - Review details
reviewName = "//input[@id='name']";

reviewEmail = "//input[@id='email']";

reviewText = "//textarea[@id='review']";


// TC21 Step 8 - Submit review
submitReviewButton =
    "//button[@id='button-review']";

    // TC21 Step 9 - Review success message
reviewSuccessMessage =
    "//span[normalize-space()='Thank you for your review.']";

    // TC22 Step 4 - Recommended Items
recommendedItemsText =
    "//h2[normalize-space()='recommended items']";

    // TC22 Step 5 - First Recommended Product Add to Cart
recommendedAddToCartButton =
    "(//div[@id='recommended-item-carousel']//a[contains(@class,'add-to-cart')])[1]";

    


}