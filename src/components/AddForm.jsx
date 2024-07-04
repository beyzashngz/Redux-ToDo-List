import {v4} from 'uuid'
import { useDispatch } from 'react-redux'
import ActionTypes from '../redux/actionTypes';
import { addTodo } from '../redux/actions/todoActions';
import { toast } from 'react-toastify';

const AddForm = () => {
  //dispatch metodunun kurulumu
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault()

    const text= e.target[0].value.trim()

    //input boş mu kontrol et boşsa durdur bildirim gönder
    if(!text ) return toast.warn("Lütfen görev içeriğini belirleyin.")

    //storea kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(),
      text:e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString()
    }

    // yeni bir todonun ekleneceğini reducer'a haber verme
    dispatch(addTodo(newTodo))

    //inputa yazı girince inputu temizle
    e.target.reset()

  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
        <input type="text" className="form-control" placeholder="örn:redux projesi"/>
        <button className="btn btn-warning">Gönder</button>
    </form>
  )
}

export default AddForm