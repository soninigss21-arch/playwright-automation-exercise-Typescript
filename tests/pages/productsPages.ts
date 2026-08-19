import { Page, expect } from '@playwright/test';
import { ProductsLocators } from '../locators/ProductsLocators';

export class ProductsPage {

    readonly page: Page;
    readonly productsLocators: ProductsLocators;

    constructor(page: Page) {
        this.page = page;
        this.productsLocators = new ProductsLocators();
    }

    // =========================================================
    // HOME PAGE
    // =========================================================

    // Step 2
    async navigateToHomePage() {
        await this.page.goto('http://automationexercise.com');
    }

    // // Step 3
    async verifyHomePageVisible() {
         await expect(
             this.page.locator(
                 this.productsLocators.homePageText
            )
        ).toBeVisible();
    }

     // =========================================================
    // TC8 - PRODUCTS PAGE
    // =========================================================




async verifyProductsListVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.productsList
        ).first()
    ).toBeVisible();
}



async verifyProductDetailPageVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.productDetailText
        )
    ).toBeVisible();
}

async verifyProductDetailsVisible() {

    await expect(
        this.page.locator(
            this.productsLocators.productName
        )
    ).toBeVisible();

    await expect(
        this.page.locator(
            this.productsLocators.productCategory
        )
    ).toBeVisible();

    await expect(
        this.page.locator(
            this.productsLocators.productPrice
        )
    ).toBeVisible();

    // await expect(
    //     this.page.locator(
    //         this.productsLocators.productAvailability
    //     )
    // ).toBeVisible();

    // await expect(
    //     this.page.locator(
    //         this.productsLocators.productCondition
    //     )
    // ).toBeVisible();

    await expect(
        this.page.locator(
            this.productsLocators.productBrand
        )
    ).toBeVisible();
}


    // TC18 Step 3 - Verify Categories visible
async verifyCategoriesVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.categoriesText
        )
    ).toBeVisible();
}


    // TC18 Step 4 - Click Women Category
async clickWomenCategory() {
    await this.page.locator(
        this.productsLocators.womenCategory
    ).click();
}

// TC18 Step 5 - Click Dress Sub-category
async clickWomenDressCategory() {
    await this.page.locator(
        this.productsLocators.womenDressCategory
    ).click();
}

// TC18 Step 6 - Verify Women Dress Products
async verifyWomenDressProductsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.womenDressProductsText
        )
    ).toBeVisible();
}

// TC18 Step 7 - Click Men Category
async clickMenCategory() {
    await this.page.locator(
        this.productsLocators.menCategory
    ).click();
}

// TC18 Step 7 - Click Men Tshirts
async clickMenTshirtsCategory() {
    await this.page.locator(
        this.productsLocators.menTshirtsCategory
    ).click();
}

// TC18 Step 8 - Verify Men Tshirts Products page
async verifyMenTshirtsProductsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.menTshirtsProductsText
        )
    ).toBeVisible();
}



// Click Products button
async clickProducts() {
    await this.page.locator(
        this.productsLocators.productsButton
    ).click();
}
// TC19 Step 4 - Verify Brands visible
async verifyBrandsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.brandsText
        )
    ).toBeVisible();
}

// TC19 Step 5 - Click Polo brand
async clickPoloBrand() {
    await this.page.locator(
        this.productsLocators.poloBrand
    ).click();
}

// TC19 Step 6 - Verify Polo brand products page
async verifyPoloBrandProductsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.poloBrandProductsText
        )
    ).toBeVisible();
}

// TC19 Step 7 - Click H&M brand
async clickHMBrand() {
    await this.page.locator(
        this.productsLocators.hmBrand
    ).click();
}

// TC19 Step 8 - Verify H&M brand products page
async verifyHMBrandProductsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.hmBrandProductsText
        )
    ).toBeVisible();
}

// TC20 Step 4 - Verify ALL PRODUCTS page
async verifyAllProductsPageVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.allProductsText
        )
    ).toBeVisible();
}


// TC20 Step 5 - Search product
async searchProduct(productName: string) {
    await this.page.locator(
        this.productsLocators.searchProductInput
    ).fill(productName);

    await this.page.locator(
        this.productsLocators.searchProductButton
    ).click();
}

// TC20 Step 6 - Verify SEARCHED PRODUCTS
async verifySearchedProductsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.searchedProductsText
        )
    ).toBeVisible();
}

// TC20 Step 7 - Verify searched products are visible
async verifySearchResultsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.searchedProductCards
        ).first()
    ).toBeVisible();
}

// TC20 Step 8 - Add searched products to cart
async addSearchedProductsToCart() {

    const buttons = this.page.locator(
        this.productsLocators.searchedProductAddToCartButtons
    );

    const count = await buttons.count();

    for (let i = 0; i < count; i++) {

        // Click Add to Cart
        await buttons.nth(i).click();

        // Verify modal opened
        await expect(
            this.page.locator('#cartModal')
        ).toBeVisible();

        // Click Continue Shopping
        await this.page
            .locator('#cartModal')
            .getByRole('button', { name: 'Continue Shopping' })
            .click();

        // Wait until modal closes
        await expect(
            this.page.locator('#cartModal')
        ).toBeHidden();
    }
}

// TC20 Step 9 - Verify products are visible in cart
async verifyProductsVisibleInCart() {
    await expect(
        this.page.locator(
            this.productsLocators.cartProductRows
        ).first()
    ).toBeVisible();
}

// TC21 Step 5 - Click first View Product
async clickFirstViewProduct() {
    await this.page.locator(
        this.productsLocators.firstViewProduct
    ).click();
}

// TC21 Step 6 - Verify Write Your Review
async verifyWriteYourReviewVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.writeYourReviewText
        )
    ).toBeVisible();
}

// TC21 Step 7 - Enter review details
async enterReviewDetails(
    name: string,
    email: string,
    review: string
) {
    await this.page.locator(
        this.productsLocators.reviewName
    ).fill(name);

    await this.page.locator(
        this.productsLocators.reviewEmail
    ).fill(email);

    await this.page.locator(
        this.productsLocators.reviewText
    ).fill(review);
}
    

// TC21 Step 8 - Click Submit
async clickSubmitReview() {
    await this.page.locator(
        this.productsLocators.submitReviewButton
    ).click();
}

// TC21 Step 9 - Verify review success message
async verifyReviewSuccessMessage() {
    await expect(
        this.page.locator(
            this.productsLocators.reviewSuccessMessage
        )
    ).toBeVisible();
}

// TC22 Step 4 - Verify Recommended Items
async verifyRecommendedItemsVisible() {
    await expect(
        this.page.locator(
            this.productsLocators.recommendedItemsText
        )
    ).toBeVisible();
}
// TC22 Step 5 - Add Recommended Product to Cart
async addRecommendedProductToCart() {
    await this.page.locator(
        this.productsLocators.recommendedAddToCartButton
    ).click();
}


}