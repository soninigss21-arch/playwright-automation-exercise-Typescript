import { Page, expect } from '@playwright/test';
import { ProductsLocators } from '../locators/ProductsLocators';
import { CommonMethods } from '../utils/CommonMethods';

export class ProductsPage {

    readonly page: Page;
    readonly productsLocators: ProductsLocators;
    readonly commonMethods: CommonMethods;


    constructor(page: Page) {
        this.page = page;
        this.productsLocators = new ProductsLocators();
        this.commonMethods = new CommonMethods(page);
    }

    // =========================================================
    // HOME PAGE
    // =========================================================

    // Step 2
    async navigateToHomePage() {
        await this.commonMethods.navigateTo(
            'https://automationexercise.com'
        );
    }

    // // Step 3
    async verifyHomePageVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.homePageText
        );
    }
   async clickProducts() {
    // Direct event bypasses the third-party Google advertisement
    await this.commonMethods.dispatchClickElement(
        this.productsLocators.productsButton
    );

    await this.commonMethods.verifyURL(
        /\/products\/?(?:[?#].*)?$/
    );
}

    // =========================================================
    // TC8 - PRODUCT DETAILS
    // =========================================================

    async verifyProductsListVisible() {
        await this.commonMethods.verifyFirstElementVisible(
            this.productsLocators.productsList
        );
    }




    async verifyProductDetailPageVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productDetailText
        );
    }

    async verifyProductDetailsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productName
        );

        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productCategory
        );

        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productPrice
        );

        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productAvailability
        );

        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productCondition
        );

        await this.commonMethods.verifyElementVisible(
            this.productsLocators.productBrand
        );
    }


    // TC18 Step 3 - Verify Categories visible
    async verifyCategoriesVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.categoriesText
        );
    }



    // TC18 Step 4 - Click Women Category
    async clickWomenCategory() {
   await this.commonMethods.clickElement(this.productsLocators.womenCategory);
}

    // TC18 Step 5 - Click Dress Sub-category
    async clickWomenDressCategory() {
    await this.commonMethods.clickElement(this.productsLocators.womenDressCategory
    );
}


    // TC18 Step 6 - Verify Women Dress Products
    async verifyWomenDressProductsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.womenDressProductsText
        );
    }

    // TC18 Step 7 - Click Men Category
    async clickMenCategory() {
        await this.commonMethods.clickElement(
            this.productsLocators.menCategory
        );
    }

    // TC18 Step 7 - Click Men Tshirts
    async clickMenTshirtsCategory() {
        await this.commonMethods.clickElement(
            this.productsLocators.menTshirtsCategory
        );
    }

    // TC18 Step 8 - Verify Men Tshirts Products page
    async verifyMenTshirtsProductsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.menTshirtsProductsText
        );
    }




    // TC19 Step 4 - Verify Brands visible
    async verifyBrandsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.brandsText
        );
    }

    // TC19 Step 5 - Click Polo brand
    async clickPoloBrand() {
        await this.commonMethods.clickElement(
            this.productsLocators.poloBrand
        );
    }


    // TC19 Step 6 - Verify Polo brand products page
    async verifyPoloBrandProductsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.poloBrandProductsText
        );
    }

    // TC19 Step 7 - Click H&M brand
    async clickHMBrand() {
        await this.commonMethods.clickElement(
            this.productsLocators.hmBrand
        );
    }


    // TC19 Step 8 - Verify H&M brand products page
    async verifyHMBrandProductsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.hmBrandProductsText
        );
    }

    // TC20 Step 4 - Verify ALL PRODUCTS page
    async verifyAllProductsPageVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.allProductsText
        );
    }


    // TC20 Step 5 - Search product
    async searchProduct(productName: string) {
        await this.commonMethods.fillElement(
            this.productsLocators.searchProductInput,
            productName
        );

        await this.commonMethods.clickElement(
            this.productsLocators.searchProductButton
        );
    }

    // TC20 Step 6 - Verify SEARCHED PRODUCTS
    async verifySearchedProductsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.searchedProductsText
        );
    }

    // TC20 Step 7 - Verify searched products are visible
    async verifySearchResultsVisible() {
        await this.commonMethods.verifyFirstElementVisible(
            this.productsLocators.searchedProductCards
        );
    }
    // TC20 Step 8 - Add searched products to cart
    async addSearchedProductsToCart() {
        const count =
            await this.commonMethods.getElementCount(
                this.productsLocators
                    .searchedProductAddToCartButtons
            );

        for (let index = 0; index < count; index++) {
            await this.commonMethods
                .dispatchClickElementByIndex(
                    this.productsLocators
                        .searchedProductAddToCartButtons,
                    index
                );

            await this.commonMethods.verifyElementVisible(
                this.productsLocators.cartModal
            );

            await this.commonMethods.clickElement(
                (this.productsLocators as any).continueShoppingButton
            );

            await this.commonMethods.verifyElementHidden(
                this.productsLocators.cartModal
            );
        }
    }

    async verifyProductsVisibleInCart() {
        await this.commonMethods.verifyFirstElementVisible(
            (this.productsLocators as any).cartProductRows
        );
    }


    // TC21 - PRODUCT REVIEW
    // =========================================================

    async clickFirstViewProduct() {
        await this.commonMethods.clickElement(
            this.productsLocators.firstViewProduct
        );
    }

    async verifyWriteYourReviewVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.writeYourReviewText
        );
    }

    async enterReviewDetails(
        name: string,
        email: string,
        review: string
    ) {
        await this.commonMethods.fillElement(
            this.productsLocators.reviewName,
            name
        );

        await this.commonMethods.fillElement(
            this.productsLocators.reviewEmail,
            email
        );

        await this.commonMethods.fillElement(
            this.productsLocators.reviewText,
            review
        );
    }

    async clickSubmitReview() {
    const submitButton = this.page.locator(
        this.productsLocators.submitReviewButton
    );

    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
    await submitButton.click();
}

    async verifyReviewSuccessMessage() {
    const reviewSection = this.page.locator(
        this.productsLocators.reviewSuccessMessage
    );

    await expect(reviewSection).toBeVisible({
        timeout: 15000
    });

    await expect(reviewSection).toContainText(
        'Thank you for your review.'
    );
}

    // =========================================================
    // TC22 - RECOMMENDED PRODUCT
    // =========================================================


    async verifyRecommendedItemsVisible() {
        await this.commonMethods.verifyElementVisible(
            this.productsLocators.recommendedItemsText
        );
    }

    async addRecommendedProductToCart() {
        await this.commonMethods.dispatchClickElement(
            this.productsLocators.recommendedAddToCartButton
        );

        await this.commonMethods.verifyElementVisible(
            this.productsLocators.cartModal
        );
    }
}

