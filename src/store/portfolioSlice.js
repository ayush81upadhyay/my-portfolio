import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchXML } from '../utils/xmlParser';

export const loadPortfolioData = createAsyncThunk('portfolio/loadAll', async () => {
  const [hero, about, experience, skills, projects, education] = await Promise.all([
    fetchXML('hero.xml'),
    fetchXML('about.xml'),
    fetchXML('experience.xml'),
    fetchXML('skills.xml'),
    fetchXML('projects.xml'),
    fetchXML('education.xml'),
  ]);
  return { hero: hero.hero, about: about.about, experience: experience.experience, skills: skills.skills, projects: projects.projects, education: education.education };
});

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPortfolioData.pending, (state) => { state.status = 'loading'; })
      .addCase(loadPortfolioData.fulfilled, (state, action) => { state.status = 'succeeded'; state.data = action.payload; })
      .addCase(loadPortfolioData.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message; });
  },
});

export default portfolioSlice.reducer;
