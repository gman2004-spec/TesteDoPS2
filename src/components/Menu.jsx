import style from './Menu.module.css'

export const Menu = (props) => {
    return(
        <>
            <nav className={style.navBar}>
                <p><a href="#s1">{props.option1}</a></p>
                <p><a href="#s2">{props.option2}</a></p>
                <p><a href={'/contact'}>{props.option3}</a></p>
            </nav>
        </>
    )
}