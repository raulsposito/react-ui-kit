import React from 'react'
import { Text, Heading } from '@components/texts'

const TextsComponent = () => (
  <>
    <h1>Text and heading</h1>
    <div>
      <Text size='xsmall' weight='light'>Overline</Text>
      <br />
      <Text size='xsmall' weight='regular'>Caption</Text>
      <br />
      <Text size='medium' weight='semibold'>Button</Text>
      <br />
      <Text size='small' weight='regular'>Body 2</Text>
      <br />
      <Text size='medium' weight='regular'>Body 1</Text>
      <br />
      <Text size='medium' weight='regular'>Subtitle 2</Text>
      <br />
      <Text size='large' weight='light'>Subtitle 1</Text>
      <hr />
      <Heading size='xsmall' weight='light' type='h6'>Heading 6</Heading>
      <br />
      <Heading size='xsmall' type='h5'>Heading 5</Heading>
      <br />
      <Heading size='small' weight='bold' type='h4'>Heading 4</Heading>
      <br />
      <Heading size='medium' type='h3'>Heading 3</Heading>
      <br />
      <Heading size='large' weight='light' type='h2'>Heading 2</Heading>
      <br />
      <Heading size='xlarge' type='h1'>Heading 1</Heading>
      <br />
      <hr />
      <Heading size='medium' type='h3' marginBottom='threeAndAHalf'>
        Heading 3 with margin-bottom three and a half example
      </Heading>
      <br />
      <Text size='xsmall' weight='regular' marginBottom='threeAndAHalf'>
        Caption with margin-bottom three and a half example
      </Text>
      <br />
    </div>
  </>
)

export default TextsComponent
