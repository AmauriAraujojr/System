import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage.tsx"
import { AdminPage } from "../pages/AdminPage.tsx"
import { ProductPage } from "../pages/ProductPage.tsx"
import { EntregasPage } from "../pages/EntregasPage.tsx"
import { MesasPage } from "../pages/MesasPage.tsx"
import { PedidosPage } from "../pages/PedidosPage.tsx"

export const RounterMain = () => {


    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/cardapio/:name" element={<ProductPage/>}/>
            <Route path="/employes/entregas" element={<EntregasPage/>}/>
            <Route path="/employes/mesas" element={<MesasPage/>}/>
            <Route path="/pedidos" element={<PedidosPage/>}/>


        </Routes>
    )
}