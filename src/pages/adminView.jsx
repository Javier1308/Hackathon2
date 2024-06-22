import React from "react";
import { useNavigate } from 'react-router-dom';
function AdminView(){
    return (
        <view>
            <ProductList></ProductList>
            <productoCrear></productoCrear>
        </view>
    )
}