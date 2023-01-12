describe('Тестирование функции покупки на testqastudio.me', function () {

    it('Покупка товаров из корзины', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('[href="https://testqastudio.me"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .header-cart').click();
        cy.get('.checkout').click();
        cy.contains('Оформение заказа');
        cy.get('#billing_first_name').type('Екатерина');
        cy.get('#billing_last_name').type('Решетникова');
        cy.get('#billing_address_1').type('д.3,ул.Энтузиастов');
        cy.get('#billing_city').type('Дубна');
        cy.get('#billing_state').type('Московская обл.');
        cy.get('#billing_postcode').type('141980');
        cy.get('#billing_phone').type('89854497301');
        cy.get('#billing_email').type('ek.reshetnikova13@yandex.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
    })
    
}) 