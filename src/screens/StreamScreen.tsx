import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function StreamScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Video Player */}
      <View className="relative w-full aspect-video bg-black">
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' }} 
          className="w-full h-full opacity-80 absolute"
        />
        {/* Top Controls Overlay */}
        <View className="absolute top-4 left-4 right-4 flex-row justify-between items-center z-10">
          <View className="flex-row items-center bg-white px-2 py-1 rounded-full shadow-md">
            <View className="w-2 h-2 rounded-full bg-live mr-1.5" />
            <Text className="text-black text-xs font-bold uppercase tracking-wider">LIVE</Text>
          </View>
          <View className="flex-row items-center bg-black/50 px-2 py-1 rounded-full border border-white/10">
            <Ionicons name="eye-outline" size={12} color="#fff" />
            <Text className="text-white text-[10px] font-bold pl-1">1.2M Viewers</Text>
          </View>
        </View>

        {/* Reactions floating */}
        <View className="absolute bottom-12 left-4 flex-row space-x-2 z-10">
           <View className="w-8 h-8 rounded-full bg-black/40 items-center justify-center mr-1">
             <Text className="text-sm">🔥</Text>
           </View>
           <View className="w-8 h-8 rounded-full bg-black/40 items-center justify-center mr-1">
             <Text className="text-sm">👏</Text>
           </View>
           <View className="w-8 h-8 rounded-full bg-black/40 items-center justify-center mr-1">
             <Text className="text-sm">🎮</Text>
           </View>
           <View className="w-8 h-8 rounded-full bg-black/70 items-center justify-center">
             <Text className="text-sm">😱</Text>
           </View>
        </View>

        {/* Bottom Controls Overlay */}
        <View className="absolute bottom-0 w-full px-4 pb-2 pt-10">
          {/* Progress bar */}
          <View className="h-1 w-full bg-white/30 rounded-full mb-3">
             <View className="h-full w-2/3 bg-live rounded-full" />
          </View>
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons name="pause" size={18} color="#fff" />
              <Ionicons name="volume-medium" size={18} color="#fff" className="ml-3 mr-3" />
              <Text className="text-white text-xs">Live</Text>
            </View>
            <View className="flex-row items-center h-7">
              <View className="flex-row bg-[#1e293b]/70 border border-white/10 rounded-full overflow-hidden mr-3">
                <TouchableOpacity className="px-3 justify-center"><Text className="text-textMuted text-[10px]">Auto</Text></TouchableOpacity>
                <TouchableOpacity className="bg-primary px-3 justify-center"><Text className="text-white text-[10px] font-bold">4K Ultra</Text></TouchableOpacity>
              </View>
              <Ionicons name="settings-outline" size={18} color="#fff" className="mr-3" />
              <Ionicons name="expand" size={18} color="#fff" />
            </View>
          </View>
        </View>
      </View>

      {/* Chat Section */}
      <View className="flex-1 bg-background">
        <View className="bg-[#334155] px-4 py-3 flex-row justify-between items-center opacity-80 border-b border-white/5">
          <Text className="text-white font-bold tracking-wider">LIVE ARENA CHAT</Text>
          <Ionicons name="people" size={20} color="#94a3b8" />
        </View>
        <ScrollView className="flex-1 px-4 py-4" showsVerticalScrollIndicator={false}>
          <View className="flex-row items-start mb-5">
            <Image source={{ uri: 'https://i.pravatar.cc/150?img=5' }} className="w-8 h-8 rounded-full mr-3" />
            <View className="flex-1">
              <View className="flex-row items-center">
                <Text className="text-accent text-xs font-bold mr-2">ViperStrike</Text>
                <Text className="text-textMuted text-[10px]">12:42</Text>
              </View>
              <Text className="text-white mt-1 pr-6">That last play was insane! FNC is throwing.</Text>
            </View>
          </View>

          <View className="flex-row items-start mb-5 bg-primary/10 p-3 rounded-xl border border-primary/20">
            <View className="w-8 h-8 rounded-full bg-primary items-center justify-center mr-3"><Ionicons name="star" size={14} color="#fff" /></View>
            <View className="flex-1">
              <View className="flex-row items-center">
                <Text className="text-[#a78bfa] text-xs font-bold mr-2">NexusKing</Text>
                <View className="bg-[#34d399] px-1 rounded"><Text className="text-[#064e3b] text-[8px] font-bold uppercase tracking-wider">Sub</Text></View>
              </View>
              <Text className="text-white mt-1 font-bold">NIP all the way baby!!! 🔥🔥🔥</Text>
            </View>
          </View>

          <View className="flex-row items-start mb-5">
            <Image source={{ uri: 'https://i.pravatar.cc/150?img=15' }} className="w-8 h-8 rounded-full mr-3" />
            <View className="flex-1">
               <View className="flex-row items-center">
                 <Text className="text-blue-400 text-xs font-bold mr-2">GhostRider</Text>
                 <Text className="text-textMuted text-[10px]">12:43</Text>
               </View>
               <Text className="text-white mt-1 text-sm">Bro aim is unreal.</Text>
            </View>
          </View>
          
          <View className="flex-row items-start mb-5">
            <Image source={{ uri: 'https://i.pravatar.cc/150?img=16' }} className="w-8 h-8 rounded-full mr-3" />
            <View className="flex-1">
               <View className="flex-row items-center">
                 <Text className="text-pink-400 text-xs font-bold mr-2">Kira_xx</Text>
                 <Text className="text-textMuted text-[10px]">12:43</Text>
               </View>
               <Text className="text-white mt-1 text-sm">GG wp</Text>
            </View>
          </View>
        </ScrollView>
        {/* Chat Input Floating - Note: normally covered by keyboard, keeping it simple for UI showcase */}
        <View className="px-4 pb-4 pt-2 bg-background border-t border-white/5">
          <View className="flex-row items-center bg-card rounded-full px-4 h-12 border border-white/10">
            <TextInput 
               placeholder="Send a message..."
               placeholderTextColor="#64748b"
               className="flex-1 text-white text-sm"
            />
            <TouchableOpacity>
               <Ionicons name="send" size={20} color="#3d61ff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
