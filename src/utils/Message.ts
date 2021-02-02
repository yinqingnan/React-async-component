import {message} from 'antd';

const Antdsuccess = (str: string,time: number = 3) => {
    message.success(str,time);
};

const Antderror = (str: string,time: number = 3) => {
    message.error(str,time);
};

const Antdwarning = (str: string,time: number = 3) => {
    message.warning(str,time);
};
const Antdinfo = (str: string,time: number = 3) => {
    message.info(str,time);
}

export {
    Antdsuccess, Antderror, Antdwarning, Antdinfo
}