// vue-cli的配置文件
module.exports = {
    // devServer: {
    //     proxy: {
    //         "/api": {
    //             target: "http://test.my-site.com",
    //         },
    //     },
    // },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/mySite/'
        : '/',
};
// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//         ? '/'
//         : '/mySite'
// }