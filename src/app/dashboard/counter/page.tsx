import { CartCounter } from "@/shopping-cart";

export const metadata = {
 title: 'ShoppingCart Page',
 description: 'Simple contador',
};

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
    
    <span>Productos en el carrito</span>
    <CartCounter numero={ 18 } />
    </div>

  )
}


export default CounterPage;


