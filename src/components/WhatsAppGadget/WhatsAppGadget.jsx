import styles from "./WhatsAppGadget.module.css"
export const WhatsAppGadget = () => {
  return (
    <a  className={`${styles.wppGadget}`} href="https://api.whatsapp.com/send?phone=+5491124161932&text=Hola, me gustaría hacer un pedido" target="_blank" rel="noreferrer">
        <img src="img/iconosSeccionContacto/whatsapp.png" alt="wpp-gadget" className={`${styles.wppIcon}`}/>
    </a>
  );
};
