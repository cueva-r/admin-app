import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
    createCoupon,
    getACoupon,
    resetState,
    updateACoupon,
} from "../features/coupon/couponSlice";

let schema = yup.object().shape({
    name: yup.string().required("El nombre del cupón es requerido"),
    expiry: yup.date().required("La fecha de expiración es requerida"),
    discount: yup.number().required("El porcentaje de descuento es requerido"),
});
const AddCoupon = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getCouponId = location.pathname.split("/")[3];
    const newCoupon = useSelector((state) => state.coupon);

    const {
        isSuccess,
        isError,
        isLoading,
        createdCoupon,
        couponName,
        couponDiscount,
        couponExpiry,
        updatedCoupon,
    } = newCoupon;
    const changeDateFormet = (date) => {
        const newDate = new Date(date).toLocaleDateString();
        const [month, day, year] = newDate.split("/");
        return [year, month, day].join("-");
    };

    useEffect(() => {
        if (getCouponId !== undefined) {
            dispatch(getACoupon(getCouponId));
        } else {
            dispatch(resetState());
        }
    }, [getCouponId]);

    useEffect(() => {
        if (isSuccess && createdCoupon) {
            toast.success("¡Cupón agregado exitosamente!");
        }
        if (isSuccess && updatedCoupon) {
            toast.success("¡Cupón actualizado exitosamente!");
            navigate("/admin/coupon-list");
        }
        if (isError && couponName && couponDiscount && couponExpiry) {
            toast.error("¡Algo salió mal!");
        }
    }, [isSuccess, isError, isLoading]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: couponName || "",
            expiry: changeDateFormet(couponExpiry) || "",
            discount: couponDiscount || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getCouponId !== undefined) {
                const data = { id: getCouponId, couponData: values };
                dispatch(updateACoupon(data));
                dispatch(resetState());
            } else {
                dispatch(createCoupon(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState);
                }, 300);
            }
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">
                {getCouponId !== undefined ? "Editar" : "Agregar"} Coupon
            </h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        name="name"
                        onChng={formik.handleChange("name")}
                        onBlr={formik.handleBlur("name")}
                        val={formik.values.name}
                        label="Ingrese el nombre del cupón"
                        id="name"
                    />
                    <div className="error">
                        {formik.touched.name && formik.errors.name}
                    </div>
                    <CustomInput
                        type="date"
                        name="expiry"
                        onChng={formik.handleChange("expiry")}
                        onBlr={formik.handleBlur("expiry")}
                        val={formik.values.expiry}
                        label="Ingrese la fecha de expiración"
                        id="date"
                    />
                    <div className="error">
                        {formik.touched.expiry && formik.errors.expiry}
                    </div>
                    <CustomInput
                        type="number"
                        name="discount"
                        onChng={formik.handleChange("discount")}
                        onBlr={formik.handleBlur("discount")}
                        val={formik.values.discount}
                        label="Ingresar descuento"
                        id="discount"
                    />
                    <div className="error">
                        {formik.touched.discount && formik.errors.discount}
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        {getCouponId !== undefined ? "Editar" : "Agregar"} Coupon
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoupon;