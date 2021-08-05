CREATE TABLE store_admins (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    owner_uuid UUID NOT NULL,
    admin_email VARCHAR(255) UNIQUE,
    admin_phone VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    refresh_token VARCHAR(1024),
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE stores (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    uuid UUID NOT NULL,
    store_admin_uuid UUID NOT NULL,
    store_name VARCHAR(255) NOT NULL,
    description TEXT,
    image_cover_urls TEXT,
    image_logo_url TEXT,
    store_type VARCHAR(50) NOT NULL,
    store_email VARCHAR(255) NOT NULL,
    store_phone VARCHAR (50) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE store_addresses (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    store_uuid UUID NOT NULL,
    address JSON NOT NULL,
    address_type VARCHAR(50) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL 
);

CREATE TABLE store_owners (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    store_id UUID NOT NULL,
    uuid UUID NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255),
    owner_phone VARCHAR(50) NOT NULL,
    owner_avatar TEXT,
    verified VARCHAR(5) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE store_reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    store_id INTEGER NOT NULL,
    consumer_id INTEGER NOT NULL,
    review TEXT,
    rate SMALLINT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE product_rooms (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    uuid UUID NOT NULL,
    store_uuid UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    privacy_mode VARCHAR(16) NOT NULL,
    is_pinned VARCHAR(5) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE product_categories (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    icon_url TEXT NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE products (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    uuid UUID NOT NULL,
    product_room_uuid UUID,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    images TEXT[],
    suitable_for TEXT NOT NULL,
    specifications JSON NOT NULL,
    maximum_retail_price VARCHAR(255) NOT NULL,
    discount VARCHAR(5) NOT NULL,
    is_in_stack VARCHAR(5) NOT NULL,
    stack_count INTEGER NOT NULL,
    initial_stack INTEGER NOT NULL,
    is_pinned VARCHAR(5) NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE product_reviws (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    consumer_id INTEGER NOT NULL,
    review TEXT,
    rate SMALLINT,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL
);

CREATE TABLE admin_status (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    owner_uuid UUID NOT NULL,
    isLoggedIn VARCHAR(5),
    is_registration_complete VARCHAR(5),
    next_reg_step VARCHAR(20),
    is_have_any_otp VARCHAR(5),
    otp VARCHAR(10),
    otp_from VARCHAR(100),
    otp_to VARCHAR(100),
    otp_expiry_token VARCHAR(1024),
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL 
);

-- register admin --
-- first resister owner and get owner id
DROP TABLE store_owners;
INSERT INTO store_owners(uuid, owner_name, owner_email, owner_phone, created_at, updated_at) VALUES('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'lushifa', 'lushifa@lushifa.com', '1042753869', now(), now());
SELECT * FROM store_owners;

SELECT uuid FROM store_owners WHERE owner_phone = '';

DELETE FROM store_owners WHERE owner_phone = '';

-- insert new admin by fetching data from owners table
INSERT INTO store_admins(owner_uuid, admin_email, admin_phone, password, created_at, updated_at)
SELECT uuid, owner_email, owner_phone, 'my-password', created_at, updated_at FROM store_owners WHERE uuid = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';

SELECT * FROM store_admins;

DELETE FROM store_admins WHERE admin_phone = '';

-- admin status
INSERT INTO admin_status(owner_uuid, is_registration_complete, next_reg_step, created_at, updated_at)
SELECT uuid, 'No', 'store', created_at, updated_at FROM store_owners WHERE uuid = '';



DELETE FROM store_owners WHERE uuid = '19913a38-a7a9-4d6d-bee0-0a146b4e563e';
DELETE FROM store_admins WHERE owner_uuid = '19913a38-a7a9-4d6d-bee0-0a146b4e563e';
DELETE FROM admin_status WHERE owner_uuid = '19913a38-a7a9-4d6d-bee0-0a146b4e563e';
DELETE FROM stores WHERE uuid = '41d6e264-2a5a-47ae-9356-de5f73319429';

SELECT * FROM store_owners;
SELECT * FROM store_admins;
SELECT * FROM admin_status;
SELECT * FROM stores;

UPDATE admin_status SET is_have_any_otp = 'Yes', otp = '789978', otp_from = '31:2:2021-23:38', otp_to = '31:2:2021-00:08', otp_expiry_token = '' WHERE owner_uuid = '34c08ea5-a1fd-4079-b091-cc1d749cc6bb';

UPDATE admin_status SET is_registration_complete = 'No', next_reg_step = 'address' WHERE owner_uuid = '15ff9dc9-bc75-4943-a06f-f63e4bcce613';

SELECT * FROM admin_status WHERE owner_uuid = '68e0572f-ab3a-47cf-918c-e4cb865844fb';
SELECT * FROM admin_status WHERE owner_uuid = '68e0572f-ab3a-47cf-918c-e4cb865844fb';

-- store
SELECT store_id FROM store_owners WHERE uuid = '19913a38-a7a9-4d6d-bee0-0a146b4e563e';

SELECT * FROM stores WHERE uuid = '41d6e264-2a5a-47ae-9356-de5f73319429';

INSERT INTO stores(uuid, store_admin_uuid, store_name, description, store_type, store_email, store_phone, created_at, updated_at) VALUES ('41d6e264-2a5a-47ae-9356-de5f73319429', '19913a38-a7a9-4d6d-bee0-0a146b4e563e', 'New Fashion', 'This is new fashion store description', 'fashion store', 'store@store.com', '1024753869', now(), now());

SELECT * FROM stores;
SELECT * FROM stores WHERE uuid = '41d6e264-2a5a-47ae-9356-de5f73319429';

DELETE FROM stores WHERE uuid = '41d6e264-2a5a-47ae-9356-de5f73319429';

-- store address
INSERT INTO store_addresses(store_uuid, address, address_type, created_at, updated_at) VALUES ('41d6e264-2a5a-47ae-9356-de5f73319429', '{"address_line_1": "addressOne", "address_line_2": "addressTwo", "city": "The city", "state": "The state", "pin": "123321"}', 'addressType', now(), now());

SELECT * FROM store_addresses WHERE store_uuid = '41d6e264-2a5a-47ae-9356-de5f73319429';

DELETE FROM store_addresses WHERE store_uuid = '41d6e264-2a5a-47ae-9356-de5f73319429';

-- token
SELECT * FROM store_admins WHERE owner_uuid = '15ff9dc9-bc75-4943-a06f-f63e4bcce613';

SELECT * FROM store_owners WHERE uuid = '15ff9dc9-bc75-4943-a06f-f63e4bcce613';

UPDATE store_admins SET refresh_token = '' WHERE owner_uuid = '15ff9dc9-bc75-4943-a06f-f63e4bcce613';

SELECT refresh_token FROM store_admins WHERE owner_uuid = '15ff9dc9-bc75-4943-a06f-f63e4bcce613';



SELECT * FROM store_admins WHERE admin_email = 'admin@admin.com' OR admin_phone = '';

-- product

SELECT * FROM products;
SELECT * FROM product_rooms;

SELECT * FROM product_rooms WHERE store_uuid = '1d0376c4-15f8-4e4d-aeb1-0fdc00a146f1' AND product_room_uuid = '1d0376c4-15f8-4e4d-aeb1-0fdc00a146f1';

-- Product_room
SELECT * FROM stores WHERE uuid = 'a84f6e0e-0b91-4c6e-95c3-ce44ba7b4a11';

INSERT INTO product_rooms(uuid, store_uuid, title, description, privacy_mode, created_at, updated_at) VALUES ('', '', '', '', '', now(), now());

DELETE FROM product_rooms WHERE uuid = 'f707373f-96d9-4fcb-ae6b-7176212e6720';

-- New Product
INSERT INTO products(uuid, product_room_uuid, category_id, title, description, suitable_for, specifications, maximum_retail_price, discount, is_in_stack, stack_count, initial_stack, created_at, updated_at) 
VALUES(
    '1d0376c4-15f8-4e4d-aeb1-0fdc00a146f1', 
    '1d0376c4-15f8-4e4d-aeb1-0fdc00a146f1', 
    '2', 
    'lappy', 
    'description', 
    'one, two', 
    '{"specOne":"One", "specTwo":"Two"}', 
    '59999', 
    '10%', 
    'Yes', 
    18,
    18,
    now(),
    now()
);

-- Select all product of the store
SELECT uuid FROM product_rooms WHERE store_uuid = '1d0376c4-15f8-4e4d-aeb1-0fdc00a146f1';

SELECT uuid FROM products WHERE product_room_uuid = '1d0376c4-15f8-4e4d-aeb1-0fdc00a146f1';

SELECT * FROM products WHERE product_room_uuid = 'af41d02a-1e02-4556-b3af-da547bcad2f4';

UPDATE store_owners SET verified = 'Yes' WHERE uuid = '370195f9-e07f-4f27-be16-3d01e709c23f';

UPDATE admin_status SET is_registration_complete = 'No', next_reg_step = 'verification' WHERE owner_uuid = '370195f9-e07f-4f27-be16-3d01e709c23f';

-- ALTER products TABLE TO ADD NEW COLUMN CALLED is_pinned
ALTER TABLE products ADD COLUMN is_pinned VARCHAR(5) NOT NULL DEFAULT 'No';

SELECT * FROM products WHERE 
product_room_uuid = '8d939637-dd47-47f1-b187-d03168c60886' OR
product_room_uuid = '08d2d5f5-748d-4238-be65-1613054ee38c' OR
product_room_uuid = '8785be91-0555-4b5a-974b-448630529ddb' OR
product_room_uuid = '4604d269-bdc3-4665-b8ec-b0c9e61a08e1' OR
product_room_uuid = 'b8d6355b-a194-48af-9b29-a430be904110' OR
product_room_uuid = '8434fe86-adf2-4bee-923c-86a6c22dd01a';


-- CLEAN EVERY TABLE
DELETE FROM product_rooms;
DELETE FROM store_owners;
DELETE FROM store_admins;
DELETE FROM store_addresses;
DELETE FROM stores;
DELETE FROM admin_status;

SELECT * FROM product_rooms;
SELECT * FROM stores;
SELECT * FROM store_owners;
SELECT * FROM store_admins;
SELECT * FROM store_addresses;
SELECT * FROM admin_status;






