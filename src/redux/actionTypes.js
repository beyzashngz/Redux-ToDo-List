// projede kullanılan aksiyon tipleri bileşen içerisinde string şeklinde tanımlandığında hataların önüne geçmek için tipleri bir nesne içinde tanımlayacağız

// nesne içinde tanımladığımız için artık vscodeun oto. tamamlama özelliği sayesinde yazım hatalarının önüne geçilir

const ActionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE'
}

export default ActionTypes;

