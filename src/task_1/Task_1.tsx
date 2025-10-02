import {ChangeEvent, memo, useState} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

export const Task_1 = () => {
  console.log("Task_1 render")

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <Input/>
      <Title title="Я title"/>
    </div>
  );
};

const Title = memo((props: { title: string }) => {
  console.log("Title render")
  return (
    <h3>{props.title}</h3>
  )
});

const Input = () => {
  console.log("Input render")

  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={handleChange}/>
  );
};
