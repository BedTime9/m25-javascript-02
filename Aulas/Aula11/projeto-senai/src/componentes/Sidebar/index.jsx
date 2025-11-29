import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const items = [
    {
        title: "Dashboard",
        content: [ { title: "Home", route: "/"} ]
    },

    {
        title: "Configurações",
        content: [ { title: "Perfil", route: "/perfil"} ]
    },

    {
        title: "Utilitários",
        content: [ { title: "Relatórios", route: "/relatorios"} ]
    }
]

export default function Sidebar({isOpen, closeSidebar}) {
    const [openindex, setOpenIndex] = useState(null);
    const handleToggleItem = (index) => setOpenIndex((prev) => (prev === index ? null: index));
    return(
        <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
            <nav className='sidebar-nav'>
                {
                    items.map((item, index) => (
                        <div className='accordion-item' key={item.title}>
                            <button className='accordion-header' onClick={() => handleToggleItem(index)}>
                                <span>
                                    {item.title}
                                </span> 
                                <span>{openindex === index ? "-": "+"}</span>
                            </button>
                            {
                                openindex === index && (
                                    <ul className='accordion-content'>
                                        {
                                            item.content.map((subItem) => (
                                                <li key={subItem.title}>
                                                    <Link to={subItem.route}
                                                        className='accordion-link'
                                                        onClick={closeSidebar}>
                                                        {subItem.title}
                                                    </Link>
                                                    {subItem.title} - {subItem.route}
                                                    <span onClick={closeSidebar}>Fechar</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
            </nav>
        </aside>
    )
}