import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const [comments, setComments] = React.useState(Array(4).fill(''));
  const [items, setItems] = React.useState(['fill out evaluation forms', 'call clinic today', 'donations delivered tomorrow', 'gather assessments']);
  const [newItem, setNewItem] = React.useState('');

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCommentChange = (value: number, comment: string) => {
    const newComments = [...comments];
    newComments[value] = comment;
    setComments(newComments);
  };

  const handleDeleteItem = (value: number) => () => {
    const newItems = [...items];
    newItems.splice(value, 1);
    setItems(newItems);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItems = [...items, newItem];
      setItems(newItems);
      setNewItem(''); // Clear the input field
    }
  };

  return (
    <div className="checklist-div">
      <List className="checklist" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <h3 className="checklist-heading">Checklist</h3>
        {items.map((item, index) => {
          const labelId = `checkbox-list-label-${index}`;

          return (
            <ListItem key={index} secondaryAction={
              <>
                <IconButton edge="end" aria-label="delete" onClick={handleDeleteItem(index)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </>
            } disablePadding>
              <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <div>
                  <ListItemText id={labelId} primary={item} />
                  <TextField
                    id={`comment-box-${index}`}
                    label="Add a comment"
                    variant="outlined"
                    fullWidth
                    multiline
                    value={comments[index]}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                  />
                </div>
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem>
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <AddIcon onClick={handleAddItem} style={{ cursor: 'pointer' }} />
            </ListItemIcon>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Add New Item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleAddItem();
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
