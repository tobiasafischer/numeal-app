import React from 'react'
import { View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'

const storiesData = [
   { id: '1', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '2', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '3', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '4', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '5', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '6', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '7', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '8', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '9', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '10', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '11', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '12', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '13', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '14', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '15', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '16', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
   { id: '17', image: 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg' },
]

const StoryNode = ({ image }: { image: string }) => (
   <TouchableOpacity className="mr-2 ml-2 h-auto">
      <View className="relative">
         <Image
            source={{ uri: image }}
            style={{ width: 60, height: 60, borderRadius: 30, zIndex: 1 }}
         />
      </View>
   </TouchableOpacity>
)

export const Story = () => {
   return (
      <View className="absolute mb-10 mt-2 h-16 items-center justify-center">
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="h-auto flex-row pr-4"
         >
            {storiesData.map((story) => (
               <StoryNode key={story.id} image={story.image} />
            ))}
         </ScrollView>
      </View>
   )
}
