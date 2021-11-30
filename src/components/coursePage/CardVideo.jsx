import './card.scss'
import CourseService from '../../services/course.service'

function CardVideo(props) {
    return (
        <div className="card-video col-sm-3">
            {

                <video controls muted preload="none">
                    <source src={`http://localhost:3000/course/video/stream/${props.videoId}`} type="video/mp4"></source>
                </video>


            }

        </div>

    )
}

export default CardVideo