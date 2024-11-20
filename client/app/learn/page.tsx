'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from '@mui/material';
import {
  School,
  TrendingUp,
  AccountBalance,
  Security,
  SwapHoriz,
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const learningCategories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of MemeFi and how to start trading meme coins',
    icon: School,
    path: '/learn/getting-started',
    color: '#FF6B6B',
  },
  {
    title: 'Trading Strategies',
    description: 'Master different trading strategies and market analysis',
    icon: TrendingUp,
    path: '/learn/trading-strategies',
    color: '#4ECDC4',
  },
  {
    title: 'Liquidity Provision',
    description: 'Understand how to provide liquidity and earn rewards',
    icon: AccountBalance,
    path: '/learn/liquidity',
    color: '#45B7D1',
  },
  {
    title: 'Security Guide',
    description: 'Learn about wallet security and safe trading practices',
    icon: Security,
    path: '/learn/security',
    color: '#96CEB4',
  },
  {
    title: 'Trading Mechanics',
    description: 'Deep dive into MemeFi\'s trading mechanics and features',
    icon: SwapHoriz,
    path: '/learn/trading-mechanics',
    color: '#FF8484',
  },
  {
    title: 'Rewards System',
    description: 'Explore how to earn and maximize your rewards',
    icon: EmojiEvents,
    path: '/learn/rewards',
    color: '#FFD93D',
  },
];

const MotionCard = motion(Card);

export default function LearnPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
            backgroundClip: 'text',
            color: 'transparent',
            mb: 2,
          }}
        >
          Learn MemeFi
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Master the art of meme coin trading with our comprehensive guides
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {learningCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={category.title}>
            <MotionCard
              component={Link}
              href={category.path}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 8px 24px ${category.color}25`,
                },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <category.icon
                  sx={{
                    fontSize: 40,
                    color: category.color,
                    mr: 2,
                  }}
                />
                <Typography variant="h5" component="h2">
                  {category.title}
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  {category.description}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Still have questions?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Join our community to get help from other traders and our support team
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
            px: 4,
            py: 1.5,
          }}
          href="https://discord.gg/fuF2KUZN"
        >
          Join Community
        </Button>
      </Box>
    </Container>
  );
}