const BASE_URL = "http://192.168.43.72:8585/";
const BASE_API_URL = "http://192.168.43.72:8585/api/";
module.exports = {


    login: {
        LoginApiEndPoint: "http://192.168.43.72:8585/api/stores/register/address"
    },

    registration: {
        OwnerRegisterApiEndPoint: "http://192.168.43.72:8585/api/stores/register/admin",

        V_OTPApiEndPoint: "http://192.168.43.72:8585/api/stores/register/verification",
        V_OTPResendApiEndPoint: "http://192.168.43.72:8585/api/stores/register/re-send",

        StoreRegisterApiEndPoint: "http://192.168.43.72:8585/api/stores/register/store",
        StoreAddressRegisterApiEndPoint: "http://192.168.43.72:8585/api/stores/register/address",

        CompleteRegisterApiEndPoint: "http://192.168.43.72:8585/api/stores/register/complete",

        LoginApiEndPoint: "http://192.168.43.72:8585/api/stores/login",
        LogoutApiEndPoint: "http://192.168.43.72:8585/api/stores/logout"
    },

    products: {
        readAllProductApiEndPoint: `${BASE_API_URL}stores/products`,

        prepareImageUrl: (productUUID, imageName) => {
            return `${BASE_URL}${productUUID}/${imageName}`
        }
    },

    orders: {
        readAllOrderApiEndPoint: "http://192.168.43.72:8585/api/stores/orders"
    }
    
}