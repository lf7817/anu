export const NOWORK = 1; //用于叠加其他任务
export const WORKING = 2; //这个节点可以继续往下遍历
export const PLACE = 3; //插入或移动
export const CONTENT = 5; //设置文本
export const ATTR = 7; //更新属性
export const NULLREF = 11; //delete null
export const DETACH = 13; //移出DOM树 componentWillUnmount
export const HOOK = 17; //componentDidMount/Update/
export const REF = 19; // ref 总在钩子之后
export const CALLBACK = 23; //回调
export const CAPTURE = 29; //出错
//上面的副作用的功能与位置可能变化频繁，我们需确保它们从小到大排列
export const effectNames = [PLACE, CONTENT, ATTR, NULLREF, HOOK,
    REF, DETACH, CALLBACK, CAPTURE].sort(function (a, b) {
    return a - b;
});
export const effectLength = effectNames.length;

// PLACE, CONTENT, DETACH 是基础因子，其他因子只能在它上面相乘
