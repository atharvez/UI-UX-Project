import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function MatchesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Match Header */}
        <View className="px-4 relative mb-4 mt-2">
          <View className="bg-card rounded-3xl overflow-hidden h-48 border border-white/10 relative">
             <Image 
               source={{ uri: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop' }} 
               className="w-full h-full opacity-50 absolute"
             />
             <View className="flex-1 p-4 justify-between items-center">
                 <View className="flex-row items-center bg-black/50 px-2 py-1 rounded-full">
                   <View className="w-2 h-2 rounded-full bg-primary mr-2" />
                   <Text className="text-white text-xs font-bold uppercase tracking-wider">78' LIVE</Text>
                 </View>
                 
                 <View className="flex-row justify-center items-center w-full px-4 mb-2">
                     <View className="items-center">
                       <View className="bg-white w-14 h-14 rounded-full items-center justify-center mb-1"><Text className="text-blue-500 font-bold text-lg">MCI</Text></View>
                       <Text className="text-white font-bold text-xs">MAN CITY</Text>
                     </View>
                     <View className="items-center px-6">
                       <Text className="text-white text-4xl font-bold shadow-lg">2 - 1</Text>
                     </View>
                     <View className="items-center">
                       <View className="bg-red-600 w-14 h-14 rounded-full items-center justify-center mb-1"><Text className="text-white font-bold text-lg">ARS</Text></View>
                       <Text className="text-white font-bold text-xs">ARSENAL</Text>
                     </View>
                 </View>
             </View>
          </View>
          {/* Watch Live Button overlapping */}
          <View className="absolute -bottom-4 self-center w-48 z-10">
            <TouchableOpacity className="bg-live rounded-full py-3 flex-row justify-center items-center shadow-lg">
               <Ionicons name="play" size={16} color="#fff" />
               <Text className="text-white font-bold ml-2 tracking-wider">WATCH LIVE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Match Timeline */}
        <View className="px-4 mt-8 mb-6">
           <View className="bg-card rounded-3xl p-6 border border-white/5">
             <Text className="text-white text-xl uppercase tracking-wider mb-6">MATCH TIMELINE</Text>
             
             <View className="space-y-6">
               <View className="flex-row items-start mb-6">
                 <View className="w-6 h-6 rounded-full bg-primary/20 items-center justify-center mr-4 mt-0.5 border border-primary/50">
                    <Ionicons name="football" size={12} color="#3d61ff" />
                 </View>
                 <View>
                   <Text className="text-primary text-xs font-bold mb-1">64' GOAL</Text>
                   <Text className="text-white font-bold text-base">Haaland, E. (MCI)</Text>
                   <Text className="text-textMuted text-xs">Assist: De Bruyne, K.</Text>
                 </View>
               </View>

               <View className="flex-row items-start mb-6">
                 <View className="w-6 h-6 rounded-full bg-accent/20 items-center justify-center mr-4 mt-0.5 border border-accent/50">
                    <View className="w-2.5 h-3.5 bg-accent/80 rounded-[2px]" />
                 </View>
                 <View>
                   <Text className="text-accent text-xs font-bold mb-1">52' YELLOW CARD</Text>
                   <Text className="text-white font-bold text-base">Gabriel (ARS)</Text>
                   <Text className="text-textMuted text-xs">Foul</Text>
                 </View>
               </View>

               <View className="flex-row items-start mb-6">
                 <View className="w-6 h-6 rounded-full bg-primary/20 items-center justify-center mr-4 mt-0.5 border border-primary/50">
                    <Ionicons name="swap-horizontal" size={12} color="#3d61ff" />
                 </View>
                 <View>
                   <Text className="text-primary text-xs font-bold mb-1">45' SUB (ARS)</Text>
                   <Text className="text-white font-bold text-base">IN: Trossard, L.</Text>
                   <Text className="text-textMuted text-xs">OUT: Martinelli, G.</Text>
                 </View>
               </View>

               <View className="flex-row items-start">
                 <View className="w-6 h-6 rounded-full bg-primary/20 items-center justify-center mr-4 mt-0.5 border border-primary/50">
                    <Ionicons name="football" size={12} color="#3d61ff" />
                 </View>
                 <View>
                   <Text className="text-primary text-xs font-bold mb-1">12' GOAL</Text>
                   <Text className="text-white font-bold text-base">Saka, B. (ARS)</Text>
                 </View>
               </View>
             </View>
           </View>
        </View>

        {/* Match Statistics */}
        <View className="px-4 mb-6">
           <View className="bg-card rounded-3xl p-6 border border-white/5">
             <Text className="text-white text-xl uppercase tracking-wider mb-6">MATCH STATISTICS</Text>
             
             <View className="mb-5">
               <View className="flex-row justify-between mb-2">
                 <Text className="text-white font-bold">58%</Text>
                 <Text className="text-textMuted text-[10px] uppercase tracking-widest">Possession</Text>
                 <Text className="text-white font-bold">42%</Text>
               </View>
               <View className="h-1.5 w-full bg-[#1e293b] rounded-full flex-row overflow-hidden">
                 <View className="h-full bg-primary" style={{ width: '58%' }} />
                 <View className="h-full bg-accent" style={{ width: '42%' }} />
               </View>
             </View>

             <View className="mb-5">
               <View className="flex-row justify-between mb-2">
                 <Text className="text-white font-bold">14</Text>
                 <Text className="text-textMuted text-[10px] uppercase tracking-widest">Shots Total</Text>
                 <Text className="text-white font-bold">8</Text>
               </View>
               <View className="h-1.5 w-full bg-[#1e293b] rounded-full flex-row overflow-hidden relative">
                 <View className="h-full bg-primary absolute left-0" style={{ width: `${(14/22)*100}%` }} />
                 <View className="h-full bg-accent absolute right-0" style={{ width: `${(8/22)*100}%` }} />
               </View>
             </View>

             <View className="mb-2">
               <View className="flex-row justify-between mb-2">
                 <Text className="text-white font-bold">6</Text>
                 <Text className="text-textMuted text-[10px] uppercase tracking-widest">Shots on Target</Text>
                 <Text className="text-white font-bold">3</Text>
               </View>
               <View className="h-1.5 w-full bg-[#1e293b] rounded-full flex-row overflow-hidden relative">
                 <View className="h-full bg-primary absolute left-0" style={{ width: `${(6/9)*100}%` }} />
                 <View className="h-full bg-accent absolute right-0" style={{ width: `${(3/9)*100}%` }} />
               </View>
             </View>
             
           </View>
        </View>

        {/* Impact Players */}
        <View className="px-4 mb-8">
           <Text className="text-white text-xl uppercase tracking-wider mb-4 border-l-2 border-primary pl-3">IMPACT PLAYERS</Text>
           
           <View className="bg-card rounded-3xl p-4 border border-white/5 mb-3 flex-row items-center">
             <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} className="w-16 h-16 rounded-full border-2 border-primary" />
             <View className="ml-4 flex-1">
               <Text className="text-white font-bold text-lg">E. Haaland</Text>
               <Text className="text-primary text-[10px] font-bold mb-2">MCI • FW</Text>
               <View className="flex-row pr-4">
                 <View className="mr-4"><Text className="text-white font-bold text-xs">1 <Text className="text-textMuted">G</Text></Text></View>
                 <View className="mr-4"><Text className="text-white font-bold text-xs">4 <Text className="text-textMuted">SOT</Text></Text></View>
                 <View><Text className="text-white font-bold text-xs">8.5 <Text className="text-textMuted">RTG</Text></Text></View>
               </View>
             </View>
           </View>

           <View className="bg-card rounded-3xl p-4 border border-white/5 mb-3 flex-row items-center">
             <Image source={{ uri: 'https://i.pravatar.cc/150?img=13' }} className="w-16 h-16 rounded-full border-2 border-accent" />
             <View className="ml-4 flex-1">
               <Text className="text-white font-bold text-lg">B. Saka</Text>
               <Text className="text-accent text-[10px] font-bold mb-2">ARS • RW</Text>
               <View className="flex-row pr-4">
                 <View className="mr-4"><Text className="text-white font-bold text-xs">1 <Text className="text-textMuted">G</Text></Text></View>
                 <View className="mr-4"><Text className="text-white font-bold text-xs">3 <Text className="text-textMuted">CC</Text></Text></View>
                 <View><Text className="text-white font-bold text-xs">8.2 <Text className="text-textMuted">RTG</Text></Text></View>
               </View>
             </View>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
