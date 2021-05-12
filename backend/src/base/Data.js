export const DATA = [
    {
        modelName: 'Admin',
        modelData: [
            {
                username: 'deniss',
                email: 'test@test.com',
                password: 'Test12#$',
                firstName: 'Deniss',
                lastName: 'Strombergs'
            }
        ]
    },
    {
        modelName: 'Attribute',
        modelData: [
            {
                code: 'color',
                isEnabled: true,
                label: 'Color',
                attributeOptions: ``,
                isFilter: true
            },
            {
                code: 'pencil_hardness',
                isEnabled: true,
                label: 'Pencil hardness',
                attributeOptions: ``,
                isFilter: true,
            },
            {
                code: 'nib_size',
                isEnabled: true,
                label: 'Nib size',
                attributeOptions: ``,
                isFilter: true
            },
            {
                code: 'author',
                isEnabled: true,
                label: 'Author',
                attributeOptions: ``,
                isFilter: true,
            },
            {
                code: 'publisher',
                isEnabled: true,
                label: 'Publisher',
                attributeOptions: ``,
                isFilter: true,
            },
            {
                code: 'page_count',
                isEnabled: true,
                label: 'Page count',
                attributeOptions: ``,
                isFilter: true
            }
        ]
    },
    {
        modelName: 'AttributeSet',
        modelData: [
            {
                code: 'default',
                isEnabled: true,
                name: 'Default'
            },
            {
                code: 'drawing',
                isEnabled: true,
                name: 'Drawing'
            },
            {
                code: 'reading',
                isEnabled: true,
                name: 'Reading'
            }
        ]
    },
    {
        modelName: 'AttributeSetAttribute',
        modelData: [
            {
                AttributeSetId: 1,
                AttributeId: 1
            },
            {
                AttributeSetId: 2,
                AttributeId: 1
            },
            {
                AttributeSetId: 2,
                AttributeId: 2
            },
            {
                AttributeSetId: 2,
                AttributeId: 3
            },
            {
                AttributeSetId: 3,
                AttributeId: 1
            },
            {
                AttributeSetId: 3,
                AttributeId: 4
            },
            {
                AttributeSetId: 3,
                AttributeId: 5
            },
            {
                AttributeSetId: 3,
                AttributeId: 6
            }
        ]
    },
    {
        modelName: 'Block',
        modelData: [
            {
                code: 'test_block',
                isEnabled: true,
                content: '<h2>Test Block</h2>'
            }
        ]
    },
    {
        modelName: 'Category',
        modelData: [
            {
                urlKey: null,
                isEnabled: true,
                name: 'Root',
                productCount: 0,
                isInMenu: true,
                CategoryId: 1
            },
            {
                urlKey: 'drawing',
                isEnabled: true,
                name: 'Drawing',
                productCount: 0,
                isInMenu: true,
                CategoryId: 1
            },
            {
                urlKey: 'reading',
                isEnabled: true,
                name: 'Reading',
                productCount: 0,
                isInMenu: true,
                CategoryId: 1
            },
            {
                urlKey: 'pencils',
                isEnabled: true,
                name: 'Pencils',
                productCount: 0,
                isInMenu: true,
                CategoryId: 2
            },
            {
                urlKey: 'pens',
                isEnabled: true,
                name: 'Pens',
                productCount: 0,
                isInMenu: true,
                CategoryId: 2
            },
            {
                urlKey: 'regular_pencils',
                isEnabled: true,
                name: 'Regular pencils',
                productCount: 0,
                isInMenu: true,
                CategoryId: 4
            },
            {
                urlKey: 'mechanical_pencils',
                isEnabled: true,
                name: 'Mechanical pencils',
                productCount: 0,
                isInMenu: true,
                CategoryId: 4
            },
            {
                urlKey: 'ballpoint_pens',
                isEnabled: true,
                name: 'Ballpoint pens',
                productCount: 0,
                isInMenu: true,
                CategoryId: 5
            },
            {
                urlKey: 'fountain_pens',
                isEnabled: true,
                name: 'Fountain pens',
                productCount: 0,
                isInMenu: true,
                CategoryId: 5
            }
        ]
    },
    {
        modelName: 'Customer',
        modelData: [
            {
                email: 'test@test.com',
                password: 'Test12#$',
                firstName: 'Deniss',
                lastName: 'Strombergs'
            }
        ]
    },
    {
        modelName: 'Address',
        modelData: [
            {
                firstName: 'Deniss',
                lastName: 'Strombergs',
                phoneNumber: '22034599',
                country: 'Latvia',
                city: 'Marupe',
                province: 'Marupes novads',
                street1: 'Tiraine, Viskalnu iela 13-8',
                street2: '',
                postalCode: 'LV-2167',
                CustomerId: 1
            }
        ]
    },
    {
        modelName: 'Cart',
        modelData: [
            {
                CustomerId: 1
            }
        ]
    },
    {
        modelName: 'CustomerGroup',
        modelData: [
            {
                code: 'new',
                name: 'New'
            },
            {
                code: 'loyal',
                name: 'Loyal'
            }
        ]
    },
    {
        modelName: 'CustomerGroup',
        modelData: [
            {
                CustomerId: 1,
                CustomerGroupId: 1
            },
            {
                CustomerId: 1,
                CustomerGroupId: 2
            }
        ]
    },
    {
        modelName: 'Order',
        modelData: [
            {
                reference: '4WGINO4G',
                date: '2021-04-20',
                status: 'ordered',
                isReturned: false,
                totalDelivery: 6.99,
                totalTax: 21.0,
                subtotal: 79.0,
                total: 100.0,
                CustomerId: 1,
                AddressId: 1
            }
        ]
    },
    {
        modelName: 'Invoice',
        modelData: [
            {
                date: '2021-04-20',
                totalDelivery: 6.99,
                totalTax: 21.0,
                subtotal: 79.0,
                total: 100.0,
                OrderId: 1
            }
        ]
    },
    {
        modelName: 'Page',
        modelData: [
            {
                isEnabled: true,
                urlKey: 'test_page',
                title: 'Test Page',
                content: '<h1>Test Page</h1>'
            }
        ]
    },
    {
        modelName: 'PaymentCard',
        modelData: [
            {
                cardholderName: 'Deniss Strombergs',
                number: '5555555555554444',
                cvcCode: '123',
                expirationDate: '2021-12-31',
                CustomerId: 1
            }
        ]
    },
    {
        modelName: 'PriceRule',
        modelData: [
            {
                code: 'black_friday_2021',
                type: 'percentage',
                discountValue: 50,
                filter: `
                    {
                        "from": "2021-11-26",
                        "to": "2021-11-27"
                    }
                `
            }
        ]
    },
    {
        modelName: 'Product',
        modelData: [
            {
                urlKey: 'mechanical_pencil',
                sku: 'mechanical_pencil',
                isEnabled: true,
                type: 'configurable',
                name: 'Mechanical pencil (0.02mm, 0.03mm)',
                price: 0.0,
                stockQuantity: 0,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil that comes with 2 sizes of nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: `
                    {
                        "thumbnail": "https://via.placeholder.com/240x180",
                        "small": https://via.placeholder.com/480x360",
                        "base": "https://via.placeholder.com/1280x720",
                        "other": [
                            https://via.placeholder.com/960x720
                        ]
                    }
                `,
                attributeValues: ``,
                attributeConfig: `
                    {
                        "configurableAttributes": [
                            "nib_size"
                        ]
                    }
                `,
                cache: ``,
                AttributeSetId: 2
            },
            {
                urlKey: null,
                sku: 'mechanical_pencil_002mm',
                isEnabled: true,
                type: 'simple',
                name: 'Mechanical pencil (0.02mm)',
                price: 20.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.02mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: `
                    {
                        "thumbnail": "https://via.placeholder.com/240x180",
                        "small": https://via.placeholder.com/480x360",
                        "base": "https://via.placeholder.com/1280x720",
                        "other": [
                            https://via.placeholder.com/960x720
                        ]
                    }
                `,
                attributeValues: `
                    {
                        nib_size: 0
                    }
                `,
                attributeConfig: ``,
                cache: ``,
                AttributeSetId: 2
            },
            {
                urlKey: null,
                sku: 'mechanical_pencil_003mm',
                isEnabled: true,
                type: 'simple',
                name: 'Mechanical pencil (0.03mm)',
                price: 15.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.03mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: `
                    {
                        "thumbnail": "https://via.placeholder.com/240x180",
                        "small": https://via.placeholder.com/480x360",
                        "base": "https://via.placeholder.com/1280x720",
                        "other": [
                            https://via.placeholder.com/960x720
                        ]
                    }
                `,
                attributeValues: `
                    {
                        nib_size: 1
                    }
                `,
                attributeConfig: ``,
                cache: ``,
                AttributeSetId: 2
            }
        ]
    },


    {
        modelName: 'CartItem',
        modelData: [
            {
                quantity: 5,
                CartId: 1,
                ProductId: 2
            },
            {
                quantity: 10,
                CartId: 1,
                ProductId: 3
            }
        ]
    },
    {
        modelName: 'OrderItem',
        modelData: [
            {
                quantity: 2,
                totalTax: 4.2,
                subtotal: 20 ,
                total: 24.2,
                OrderId: 1,
                ProductId: 2
            },
            {
                quantity: 2,
                totalTax: 31.5,
                subtotal: 15 ,
                total: 18.15,
                OrderId: 1,
                ProductId: 3
            }
        ]
    },
    {
        modelName: 'ProductCategory',
        modelData: [
            {
                ProductId: 1,
                CategoryId: 7
            }
        ]
    },
    {
        modelName: 'Review',
        modelData: [
            {
                date: '2021-05-05',
                title: 'Trash',
                content: 'Absolute garbage, does not work.',
                raiting: 1,
                CustomerId: 1,
                ProductId: 1
            }
        ]
    },
    {
        modelName: 'Variant',
        modelData: [
            {
                ParentId: 1,
                ChildId: 2
            },
            {
                ParentId: 1,
                ChildId: 3
            }
        ]
    }
]

export default DATA
