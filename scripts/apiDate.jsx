var apiDate = [
  {
    method: "post",
    isMockData: false,
    url: "/login",
    data: {
      status: 0,
      data: [
        {
          authName: "权限管理",
          type: 0,
          url: "/authManage",
          subset: [
            {
              authName: "角色模块",
              type: 1,
              id: 4,
              url: "/tbuser/roleList",
              subset: [
                {
                  authName: "获取用户信息",
                  type: 2,
                  subset: [],
                  handleType: "view",
                  id: 11,
                  url: "/tbuser/getUserInfo"
                },
                {
                  authName: "新增用户",
                  type: 2,
                  subset: [],
                  handleType: "add",
                  id: 12,
                  url: "/tbuser/saveUser"
                },
                {
                  authName: "配置权限",
                  type: 2,
                  subset: [],
                  handleType: "getTestTree",
                  id: 14,
                  url: "/tbuser/tree"
                },
                {
                  authName: "更新树",
                  type: 2,
                  subset: [],
                  handleType: "updateTestTree",
                  id: 15,
                  url: "/tbuser/tree"
                }
              ]
            },
            {
              authName: "角色模块1",
              type: 1,
              id: 5,
              url: "/tbuser/roleList1",
              subset: [
                {
                  authName: "获取用户信息",
                  type: 2,
                  subset: [],
                  handleType: "view",
                  id: 11,
                  url: "/tbuser/getUserInfo1"
                },
                {
                  authName: "新增用户",
                  type: 2,
                  subset: [],
                  handleType: "add",
                  id: 12,
                  url: "/tbuser/saveUser1"
                },
                {
                  authName: "配置权限",
                  type: 2,
                  subset: [],
                  handleType: "getTestTree",
                  id: 141,
                  url: "/tbuser/tree1"
                },
                {
                  authName: "更新树",
                  type: 2,
                  subset: [],
                  handleType: "updateTestTree",
                  id: 115,
                  url: "/tbuser/tree1"
                }
              ]
            }
          ]
        },
        {
          authName: "系统管理",
          type: 0,
          url: "/system",
          subset: [
            {
              authName: "用户模块",
              type: 1,
              id: 4,
              url: "/tbuser/userList",
              subset: [
                {
                  authName: "获取用户信息",
                  type: 2,
                  subset: [],
                  handleType: "view",
                  id: 11,
                  url: "/tbuser/getUserInfo"
                },
                {
                  authName: "新增用户",
                  type: 2,
                  subset: [],
                  handleType: "add",
                  id: 12,
                  url: "/tbuser/saveUser"
                },
                {
                  authName: "配置权限",
                  type: 2,
                  subset: [],
                  handleType: "getTestTree",
                  id: 14,
                  url: "/tbuser/tree"
                },
                {
                  authName: "更新树",
                  type: 2,
                  subset: [],
                  handleType: "updateTestTree",
                  id: 15,
                  url: "/tbuser/tree"
                }
              ]
            }
          ]
        }
      ]
    }
  },//Login
  {
    method: "post",
    isMockData: false,
    url: "/login1",
    data: {
      status: 0,
      data: [
        {
          pathName: "销售管理",
          type: 0,
          url: "/salesManagement",
          subset: [
            {
              pathName: "价格管理",
              type: 0,
              url: "/priceManagement",
              subset: [
                {
                  pathName: "默认销售价",
                  type: 1,
                  url: "/tbuser/roleList",
                  subset: [
                    {
                      pathName: "获取用户信息",
                      type: 2,
                      subset: [],
                      handleType: "view",
                      id: 11,
                      url: "/tbuser/getUserInfo"
                    },
                    {
                      pathName: "新增用户",
                      type: 2,
                      subset: [],
                      handleType: "add",
                      id: 12,
                      url: "/tbuser/saveUser"
                    },
                    {
                      pathName: "配置权限",
                      type: 2,
                      subset: [],
                      handleType: "getTestTree",
                      id: 14,
                      url: "/tbuser/tree"
                    },
                    {
                      pathName: "更新树",
                      type: 2,
                      subset: [],
                      handleType: "updateTestTree",
                      id: 15,
                      url: "/tbuser/tree"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },//login1
  {
    method: "post",
    isMockData: true,
    url: "/tbuser/roleList",
    data: {
      status: 0,
      data: {
        page: 1,
        pageSize: 5,
        records: 30,
        config: {
          key: "id"
        },
        columnInfo: [
          {
            titleName: "标题",
            columnName: "title",
            type: "Input",
            disabled: "111"
          },
          {
            titleName: "角色",
            columnName: "column",
            type: "Input",
            disabled: "111"
          },
          {
            titleName: "内容",
            columnName: "content",
            type: "Input",
            disabled: "111"
          },
          {
            titleName: "创建时间",
            columnName: "createTime",
            type: "Input",
            disabled: "111"
          }
        ],
        operates: ["edit", "import", "add", "TestTree"],
        searchList: [
          {
            id: 1,
            name: "日期",
            key: "billMonth",
            type: "MonthPicker",
            value: "",
            formart: "YYYY-MM"
          },
          {
            id: 2,
            name: "用户名",
            key: "searchKey",
            type: "Input",
            value: ""
          }
        ],
        "rows|30": [
          {
            title: "@ctitle(5)",
            "column|1": ["开发者", "测试人员", "销售人员"],
            content: "@csentence(10)",
            createTime: '@date("yyyy-MM-dd")',
            id: "@increment"
          }
        ]
      }
    }
  },
  {
    method: "post",
    isMockData: true,
    url: "/tbuser/roleList1",
    data: {
      status: 0,
      data: {
        page: 1,
        pageSize: 5,
        records: 30,
        config: {
          key: "id"
        },
        columnInfo: [
          {
            titleName: "标题",
            columnName: "title",
            type: "Input",
            disabled: "111"
          },
          {
            titleName: "角色",
            columnName: "column",
            type: "Input",
            disabled: "111"
          },
          {
            titleName: "内容",
            columnName: "content",
            type: "Input",
            disabled: "111"
          },
          {
            titleName: "创建时间",
            columnName: "createTime",
            type: "Input",
            disabled: "111"
          }
        ],
        operates: ["edit", "import", "add", "TestTree"],
        searchList: [
          {
            id: 1,
            name: "日期",
            key: "billMonth",
            type: "MonthPicker",
            value: "",
            formart: "YYYY-MM"
          },
          {
            id: 2,
            name: "用户名",
            key: "searchKey",
            type: "Input",
            value: ""
          }
        ],
        "rows|30": [
          {
            title: "@ctitle(5)",
            "column|1": ["开发者", "测试人员", "销售人员"],
            content: "@csentence(10)",
            createTime: '@date("yyyy-MM-dd")',
            id: "@increment"
          }
        ]
      }
    }
  }
];
module.exports = apiDate;
