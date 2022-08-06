import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value)
	}

	return (
		<div>
			<input value={value} onChange={changeHandler} type="text" placeholder='controlled ' />
			<input ref={inputRef} type="text" placeholder='not controlled ' />

			<button onClick={clickHandler}>Тоже Нажми-ка</button>
		</div>
	);
};

export default EventsExample;