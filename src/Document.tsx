import {Document, Page, Text, View} from '@react-pdf/renderer'
import {createTw} from 'react-pdf-tailwind'

const tw = createTw({})

export default function App() {
  return (
    <Document>
      <Page size="LETTER" orientation="portrait" dpi={72}>
        <View style={tw('flex flex-1 flex-row items-stretch h-full w-full')}>
          <View>
            <View style={tw('flex-1')}>
              <View style={tw('flex items-center p-24 w-full')}>
                <View style={tw('flex-1 border border-gray-900 p-24 w-full')}>
                  <Text style={tw('text-2xl')}>Section #1</Text>
                </View>
              </View>
            </View>
            <View style={tw('flex-1 bg-gray-500')}>
              <Text style={tw('text-amber-600 text-2xl')}>Section #2</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
