export {
    thunksApplications,
    useGetOrdersQuery,
    useUpdateOrderStatusMutation,
    useDeleteOrderMutation
} from "./model/thunkApplications";
export type { Order, OrderItem } from "./types";
export { statusConfig, sortOptions } from "./config";