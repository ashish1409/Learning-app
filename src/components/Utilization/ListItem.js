import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const data = [
  { id: "1", forClass: "CBSC :Grade 5 Maths The Fish Tale ", date: "JUNE 07, 2020 ", src: "http://i.pravatar.cc/300?img=1", status: "true" },
  { id: "2", forClass: "CBSC :Science Super Senses ", date: "JUNE 13, 2020 ", src: "http://i.pravatar.cc/300?img=5", status: "false" },
  { id: "3", forClass: "CBSC :Grade 5 Maths ", date: "JUNE 07, 2020 ", src: "http://i.pravatar.cc/300?img=7", status: "false" },
  { id: "4", forClass: "CBSC :Grade 3 Hindi Workshop ", date: "JUNE 18, 2020 ", src: "http://i.pravatar.cc/300?img=9", status: "true" },
  { id: "5", forClass: "CBSC :Grade 1 Art Class ", date: "JULY 07, 2020 ", src: "http://i.pravatar.cc/300?img=7", status: "true" },
  { id: "6", forClass: "CBSC :Grade 2 Art Class ", date: "JULY 02, 2020 ", src: "http://i.pravatar.cc/300?img=9", status: "true" },
  { id: "7", forClass: "CBSC :Grade 2 English Workshop ", date: "JULY 10, 2020 ", src: "http://i.pravatar.cc/300?img=7", status: "false" },
  { id: "8", forClass: "CBSC :Grade 5 Maths ", date: "JUNE 07, 2020 ", src: "http://i.pravatar.cc/300?img=7", status: "false" },
  { id: "9", forClass: "CBSC :Grade 3 Hindi Workshop ", date: "JUNE 18, 2020 ", src: "http://i.pravatar.cc/300?img=9", status: "true" },
]

export default function ListItem() {
  return (
    <Card className="cardroot">
      <CardHeader className="head-title delayed" title="Resource Allocation"></CardHeader>
      {data.map(elem => (
        <Card className="card-inner-block" key={data.indexOf(elem)}>
          <CardHeader className="heading-title"
            avatar={
              <Avatar aria-label="recipe" key={elem.id} src={elem.src}></Avatar>
            }
            action={
              <div>
                <IconButton aria-label="Schedule">
                  <EventIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  {elem.status === "true" ? <CheckCircleOutlineIcon style={{ color: "green" }} /> : <CancelOutlinedIcon style={{ color: "red" }} />}
                </IconButton>
              </div>
            }
            title={elem.forClass}
            subheader={`earnings : ${elem.date}`}

          />
        </Card>
      ))}


    </Card>
  );
}

