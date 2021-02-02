interface Rolus {
    email: {
        message: string;
        required?: boolean;
        min?: number;
        max?: number;
    }[];
    password: {
        message: string;
        required?: boolean;
        min?: number;
        max?: number;
    }[];
}

export const Rules: Rolus = {
    email: [
        {
            required: true,
            message: "密码为必填项，不能为空",
        },
    ],

    password: [
        {
            required: true,
            message: "密码为必填项，不能为空",
        },
        {
            min: 6,
            max: 30,
            message: "密码长度因为6 - 30 位",
        },
    ],
}

