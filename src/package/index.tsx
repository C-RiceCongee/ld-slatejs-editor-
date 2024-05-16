import { EventHandler, KeyboardEventHandler, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const SlateEditor = () => {
	const initialValue = [
		{
			type: 'paragraph',
			children: [{ text: 'A line of text in a paragraph.' }],
		},
	]
	const handleOneKeyDown = event => {
    // TODO 独立拦截多次输入 然后进行匹配替换！
		console.log(event.key)
		if (event.key === '&') {
			// Prevent the ampersand character from being inserted.
			event.preventDefault()
			// Execute the `insertText` method when the event occurs.
			editor.insertText('and')
		}
	}
	const [editor] = useState(() => withReact(createEditor()))
	return (
		<Slate
			editor={editor}
			initialValue={initialValue}
			children={<Editable onKeyDown={handleOneKeyDown} />}
		/>
	)
}

export default SlateEditor
