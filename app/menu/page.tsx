import React from 'react';
import Image from 'next/image'; 

import { IoChevronForwardOutline} from "react-icons/io5";
import { FaPizzaSlice, FaHamburger, FaUtensils } from "react-icons/fa"; 
import { GiChefToque } from "react-icons/gi";

import PageHeader from '../components/PageHeader';
import Statistics from '../components/Statistics';


const Menu = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="min-h-screen flex flex-col items-center">
        {/* Header */}
        <PageHeader title="Our Food Menu" currentPage="Menu" />  

        {/* Starter Menu */}
        <section className="w-full max-w-7xl mx-auto my-12 px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative aspect-[4/3]">
              <Image
                src="/menu1.png"
                alt="Starter Menu"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
                Starter Menu
              </h2>
              <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Alder Grilled Chinook Salmon</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">32$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Berries and Creme Tart</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">43$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Tormentoso Bush Pizza Pintage</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">14$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">35$</span>
              </li>
            </ul>
            </div>
          </div>
        </section>

        {/* Main Course */}
        <section className="w-full max-w-7xl mx-auto my-12 px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
                Main Course
              </h2>
              <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Optic Big Breakfast Combo Menu</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">32$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Cashew Chicken With Stir-Fry</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">43$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Vegetables & Green Salad</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">14$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">35$</span>
              </li>
            </ul>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[4/3] order-1 md:order-2">
              <Image
                src="/menu2.png"
                alt="Main Course"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <Statistics />

        {/* Dessert */}
        <section className="w-full max-w-7xl mx-auto my-12 px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative aspect-[4/3]">
              <Image
                src="/menu3.png"
                alt="Dessert"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
                Dessert
              </h2>
              <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Fig and Lemon Cake</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">32$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Creamy Mascarpone Cake</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">43$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Pastry, Blueberries, Lemon Juice</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">14$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Pain au Chocolat</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">35$</span>
              </li>
            </ul>
            </div>
          </div>
        </section>

        {/* Drinks */}
        <section className="w-full max-w-7xl mx-auto my-12 px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
                Drinks
              </h2>
              <ul className="text-gray-600 space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Caffè Macchiato</h3>
                  <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">32$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Aperol Spritz Cappuccino</h3>
                  <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-xs text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">43$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Caffè Latte Campuri</h3>
                  <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                  <p className="text-xs text-gray-500">1000 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">14$</span>
              </li>
              <li className="flex justify-between">
                <div>
                  <h3 className="font-bold">Tormentoso Bush Tea Pintage</h3>
                  <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                  <p className="text-xs text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">35$</span>
              </li>
            </ul>
            </div>
            <div className="w-full md:w-1/2 relative aspect-[4/3] order-1 md:order-2">
              <Image
                src="/menu4.png"
                alt="Drinks"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;