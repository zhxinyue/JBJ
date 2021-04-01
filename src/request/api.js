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
//选择购物车商品，进行结算，返回Json结构，包括临时结算GUID：order_temp_guid
export const CreateTempOrder = (params = {}) => Http.post(params);
//买家操作--购物
//进行结算
export const CartPayment = (params = {}) => Http.post(params);
//添加购物地址，未注册的买家和已注册的买家都用这个接口
export const CartPAddAddressayment = (params = {}) => Http.post(params);
//修改购物地址，邮箱不能修改
export const UpdateAddress = (params = {}) => Http.post(params);
//获得购物地址
export const GetAddress = (params = {}) => Http.post(params);
//买家操作--购物车
// 减少购物车商品数量
export const CartReduce = (params = {}) => Http.post(params);
//添加购物车商品数量
export const CartAdd = (params = {}) => Http.post(params);
//获得购物车
export const GetCart = (params = {}) => Http.post(params);
//获得购物车（简短）
export const GetShortCart = (params = {}) => Http.post(params);
//买家绑定访问Guid
export const BuyerVisit = (params = {}) => Http.post(params);
//添加购物车
export const InsertCart = (params = {}) => Http.post(params);










