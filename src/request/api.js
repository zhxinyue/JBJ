// 导入封装好的网络请求类工具
import Http from './http';
// 封装各种接口请求
//Banner
export const GetBanner = (params = {}) => Http.post(params);
//买家注册
export const BuyerRegister = (params = {}) => Http.post(params);
//买家登录
export const BuyerLogin = (params = {}) => Http.post(params);
//买家修改信息
export const BuyerChange = (params = {}) => Http.post(params);
//买家修改密码
export const BuyerChangePW = (params = {}) => Http.post(params);
//获得专题
export const GetSubject = (params = {}) => Http.post(params);
//获得专题下SKU
export const GetSubjectSku = (params = {}) => Http.post(params);
//获得Color
export const GetSkuColor = (params = {}) => Http.post(params);
//获得materia
export const GetSkuMateria = (params = {}) => Http.post(params);
//获得Size
export const GetSkuSize = (params = {}) => Http.post(params);
//获得子Sku详细信息
export const GetSubSku = (params = {}) => Http.post(params);
//获得Sku详细信息
export const GetSku = (params = {}) => Http.post(params);
