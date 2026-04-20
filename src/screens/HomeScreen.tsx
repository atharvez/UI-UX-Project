import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="px-4 mt-4 flex-row justify-between items-center mb-4">
          <View className="w-10 h-10 rounded-full border border-white/20 items-center justify-center">
             <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} className="w-8 h-8 rounded-full" />
          </View>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </View>

        {/* Hero Banner */}
        <View className="px-4 relative mb-6">
          <View className="bg-card rounded-3xl overflow-hidden h-64 border border-white/10 relative pb-4">
             <Image 
               source={{ uri: 'https://images.unsplash.com/photo-1518605368461-1e125222058c?q=80&w=600&auto=format&fit=crop' }} 
               className="w-full h-full opacity-40 absolute"
             />
             <View className="flex-1 p-4 justify-between">
                 <View className="flex-row items-center bg-black/50 px-2 py-1 rounded-full self-start">
                   <View className="w-2 h-2 rounded-full bg-live mr-2" />
                   <Text className="text-white text-xs font-bold uppercase tracking-wider">Live Match</Text>
                 </View>
                 
                 <View>
                   <Text className="text-white text-3xl font-black shadow-lg">CHAMPIONS</Text>
                   <Text className="text-white text-3xl font-black mb-4 shadow-lg">LEAGUE <Text className="text-primary">FINAL</Text></Text>
                   <View className="bg-black/60 rounded-xl p-4 flex-row justify-between items-center">
                     <View className="items-center">
                       <View className="bg-white w-10 h-10 rounded-full items-center justify-center mb-1"><Text className="text-black font-bold">RMA</Text></View>
                       <Text className="text-white font-bold text-xs">RMA</Text>
                     </View>
                     <View className="items-center">
                       <Text className="text-primary text-3xl font-bold">2 - 1</Text>
                       <Text className="text-textMuted text-xs">78:42</Text>
                     </View>
                     <View className="items-center">
                       <View className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center mb-1"><Text className="text-white font-bold">MCI</Text></View>
                       <Text className="text-white font-bold text-xs">MCI</Text>
                     </View>
                   </View>
                 </View>
             </View>
          </View>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 mb-6">
          <TouchableOpacity className="bg-primary px-6 py-2 rounded-full mr-3 h-9 justify-center">
            <Text className="text-white font-bold text-xs">ALL SPORTS</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#12121a] border border-white/10 px-6 py-2 rounded-full mr-3 h-9 justify-center">
            <Text className="text-white font-bold text-xs">FOOTBALL</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#12121a] border border-white/10 px-6 py-2 rounded-full mr-3 h-9 justify-center">
            <Text className="text-white font-bold text-xs">VALORANT</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Live Scores Carousel */}
        <View className="px-4 mb-2 flex-row justify-between items-end">
           <Text className="text-white text-xl"><Text className="text-primary">LIVE</Text> SCORES</Text>
           <Text className="text-textMuted text-xs font-bold tracking-wider uppercase">View All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 mb-6 pt-2 pb-4">
           {/* Card 1 */}
           <View className="bg-card rounded-2xl p-4 w-60 mr-4 border border-white/5">
             <View className="flex-row justify-between items-center mb-4">
               <Text className="text-primary text-[10px] font-bold tracking-wider uppercase">Premier League</Text>
               <View className="flex-row items-center"><View className="w-1.5 h-1.5 rounded-full bg-live mr-1" /><Text className="text-live text-xs">45:00+2</Text></View>
             </View>
             <View className="flex-row justify-between items-center mb-3">
               <View className="flex-row items-center">
                 <Ionicons name="football" size={16} color="#fff" className="mr-2" />
                 <Text className="text-white font-bold ml-2">Arsenal</Text>
               </View>
               <Text className="text-white font-bold text-lg">1</Text>
             </View>
             <View className="flex-row justify-between items-center">
               <View className="flex-row items-center">
                 <Ionicons name="football-outline" size={16} color="#fff" className="mr-2" />
                 <Text className="text-white font-bold ml-2">Chelsea</Text>
               </View>
               <Text className="text-white font-bold text-lg">0</Text>
             </View>
           </View>

           {/* Card 2 */}
           <View className="bg-card rounded-2xl p-4 w-60 mr-4 border border-white/5">
             <View className="flex-row justify-between items-center mb-4">
               <Text className="text-accent text-[10px] font-bold tracking-wider uppercase">NBA Playoffs</Text>
               <View className="flex-row items-center"><View className="w-1.5 h-1.5 rounded-full bg-live mr-1" /><Text className="text-live text-xs">Q3 4:12</Text></View>
             </View>
             <View className="flex-row justify-between items-center mb-3">
               <View className="flex-row items-center">
                 <Ionicons name="basketball" size={16} color="#fff" className="mr-2" />
                 <Text className="text-white font-bold ml-2">Celtics</Text>
               </View>
               <Text className="text-white font-bold text-lg">82</Text>
             </View>
             <View className="flex-row justify-between items-center">
               <View className="flex-row items-center">
                 <Ionicons name="basketball-outline" size={16} color="#fff" className="mr-2" />
                 <Text className="text-white font-bold ml-2">Heat</Text>
               </View>
               <Text className="text-white font-bold text-lg">78</Text>
             </View>
           </View>
           <View className="w-4" />{/* padding right */}
        </ScrollView>

        {/* Featured Stream */}
        <View className="px-4 mb-6">
           <View className="bg-card rounded-3xl overflow-hidden h-56 relative border border-white/10">
             <Image 
               source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop' }} 
               className="w-full h-full opacity-60 absolute"
             />
             <View className="flex-1 p-4 justify-end">
                 <View className="flex-row justify-between items-end">
                   <View>
                     <View className="bg-primary/20 px-2 py-1 rounded mb-1 self-start">
                       <Text className="text-primary text-xs font-bold">VCT MASTERS</Text>
                     </View>
                     <Text className="text-white text-2xl font-black shadow-md">SEN VS PRX</Text>
                     <Text className="text-white text-2xl font-black shadow-md">GRAND FINALS</Text>
                   </View>
                   <View className="w-12 h-12 bg-primary rounded-full items-center justify-center">
                     <Ionicons name="play" size={24} color="#fff" className="ml-1" />
                   </View>
                 </View>
             </View>
           </View>
        </View>

        {/* News Feed */}
        <View className="px-4 mb-8 space-y-4">
           {/* News Item 1 */}
           <View className="bg-card rounded-2xl p-4 flex-row items-center border border-white/5 mb-3">
              <View className="w-16 h-16 bg-[#ef4444] rounded-xl items-center justify-center mr-4">
                 <Text className="text-white font-bold text-xl">FC</Text>
              </View>
              <View className="flex-1">
                 <Text className="text-primary/70 text-[10px] font-bold uppercase tracking-widest mb-1">CS2 Major</Text>
                 <Text className="text-white font-bold mb-1">FAZE CLAN ADVANCES</Text>
                 <Text className="text-textMuted text-xs" numberOfLines={2}>Highlights from the stunning comeback on Nuke.</Text>
              </View>
           </View>
           {/* News Item 2 */}
           <View className="bg-card rounded-2xl p-4 flex-row items-center border border-white/5 mb-3">
              <View className="w-16 h-16 bg-[#1e1b4b] rounded-xl items-center justify-center mr-4">
                 <Text className="text-white font-bold text-xl">T1</Text>
              </View>
              <View className="flex-1">
                 <Text className="text-primary/70 text-[10px] font-bold uppercase tracking-widest mb-1">WORLDS 2024</Text>
                 <Text className="text-white font-bold mb-1">T1 ROSTER LOCKS</Text>
                 <Text className="text-textMuted text-xs" numberOfLines={2}>Faker confirmed to lead the squad for another year.</Text>
              </View>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
