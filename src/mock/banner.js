import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [
        {
            id: "2",
            midImg: "https://github.com/GG-Monster/vue-demo-1/blob/main/WechatIMG4.jpeg?raw=true",
            bigImg: "https://github.com/GG-Monster/vue-demo-1/blob/main/WechatIMG4.jpeg?raw=true",
            title: "夏天的海",
            description: "是否也像你一样清澈",
        },
        {
            id: "1",
            midImg:
                "https://github.com/GG-Monster/vue-demo-1/blob/main/WechatIMG3.jpeg?raw=true",
            bigImg:
                "https://github.com/GG-Monster/vue-demo-1/blob/main/WechatIMG3.jpeg?raw=true",
            title: "一览众山小",
            description: "人只有在一定高度往下看，才能体会到乐趣",
        },
        {
            id: "3",
            midImg: "https://github.com/GG-Monster/vue-demo-1/blob/main/WechatIMG5.jpeg?raw=true",
            bigImg: "https://github.com/GG-Monster/vue-demo-1/blob/main/WechatIMG5.jpeg?raw=true",
            title: "游泳池",
            description: "新鲜如你",
        },
    ],
});
