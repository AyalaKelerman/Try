import '../../style/RoomsView.css'

const RoomsView = () => {
    return (
    <div className='rooms-container'>
        <div className='large-room-item'>
            <img src="src/assets/lookRoomColorful.png" alt="Room 1" className='large-room-image'/>
        </div>
        <div className='room-item'>
            <img src="src/assets/look.png" alt="Room 2" className='room-image'/>
        </div>
        <div className='room-item'>
            <img src="src/assets/look.png" alt="Room 3" className='room-image'/>
        </div>
        <div className='room-item'>
            <img src="src/assets/look.png" alt="Room 4" className='room-image'/>
        </div>
        <div className='room-item'>
            <img src="src/assets/look.png" alt="Room 5" className='room-image'/>
        </div>
        <div className='room-item'>
            <img src="src/assets/look.png" alt="Room 6" className='room-image'/>
        </div>
    </div>
    );
}
export default RoomsView; 