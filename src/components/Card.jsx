import { useState } from "react";
import { useDispatch } from "react-redux"
import Modal from "./Modal";
import ActionTypes from "../redux/actionTypes";
import { updateTodo, deleteTodo } from "../redux/actions/todoActions";

const Card = ({todo}) => {
  //modal açık mı 
  const [isOpen, setIsOpen] = useState(false)
  //dispatch kurulum
  const dispatch = useDispatch();

  //sil butonuna tıklayınca reducera haber ver
  const handleDelete = () =>{
    //onaylamazsa fonksiyonu durdur
    if(!confirm("Silmek istediğinizden emin misiniz?")) return;
      dispatch(deleteTodo(todo.id))
  }

  //tamamla butonuna tıklanında is_done değerini tersine çevir
  const handleStatus = () => {
    //1- is_done değeri mevcut isdone değerinin tersi olan yeni nesne oluştur
    const updated = {...todo,is_done: !todo.is_done}
    
    //2- reducera bir todonun güncelleneceğini haber ver
    dispatch(updateTodo(updated))
  }


  
  return (
    <div className="border shadow-lg p-4 my-5 rounded">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>

      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(true)} className="bg-primary">Düzenle</button>
      <button onClick={handleStatus} className="bg-success mx-3">{todo.is_done ? 'Geri Al' : 'Tamamla'}</button>
      <button onClick={handleDelete} className="bg-danger">Sil</button>
      
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)}/>}


    </div>
  )
}

export default Card