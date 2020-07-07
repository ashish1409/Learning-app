import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const faces = [
  "https://i.pravatar.cc/300?img=13",
  "https://i.pravatar.cc/300?img=12",
  "https://i.pravatar.cc/300?img=11",
  "https://i.pravatar.cc/300?img=10"
];
const data = [
  { forClass: "CBSC :Grade 5 Maths Parts and Wholes ", date: "JULY 07, 2020 " },
  { forClass: "CBSC :Grade 5 English", date: "JULY 13 2020 " },
  { forClass: "CBSC :Grade 5 Science Super Senses   ", date: "JULY 10, 2020 " },
  { forClass: "CBSC :Grade 5 Whose Forests?  ", date: "JULY 28, 2020 " },
  { forClass: "CBSC :Grade 5 Maths Smart Charts ", date: "JULY 30, 2020 " },
  { forClass: "CBSC :Grade 5 Like Father, Like Daughter  ", date: "JULY 07, 2020 " },
  { forClass: "CBSC :Grade 5 Maths The Fish Tale ", date: "JULY 07, 2020 " },

]
export default function OnTrack() {

  return (
    <Card className="cardroot">
      <CardHeader className="head-title ontrack" title="On Track"></CardHeader>
      {data.map(elem => (
        <Card className="card-inner-block" key={data.indexOf(elem)}>
          <CardHeader className="heading-title"
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={elem.forClass}
            subheader={`earnings : ${elem.date}`}

          />
          <CardActions disableSpacing>
            {faces.map(face => (
              <Avatar key={face} src={face} />
            ))} <IconButton>
              <ControlPointIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Card>
  );
}
