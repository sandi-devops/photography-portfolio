<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    // GET all projects
    public function index()
    {
        return response()->json(Project::all());
    }

    // CREATE project
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $imagePath = null;

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('projects', 'public');
            }

            $project = Project::create([
                'title' => $validated['title'],
                'description' => $validated['description'],
                'image' => $imagePath,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Project created successfully',
                'data' => $project
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error creating project: ' . $e->getMessage()
            ], 500);
        }
    }

    // UPDATE project
    public function update(Request $request, $id)
    {
        try {
            $project = Project::findOrFail($id);

            $validated = $request->validate([
                'title' => 'sometimes|required|string|max:255',
                'description' => 'sometimes|required|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $imagePath = $project->image;

            if ($request->hasFile('image')) {
                // Delete old image if exists
                if ($project->image && \Storage::disk('public')->exists($project->image)) {
                    \Storage::disk('public')->delete($project->image);
                }
                $imagePath = $request->file('image')->store('projects', 'public');
            }

            $project->update([
                'title' => $validated['title'] ?? $project->title,
                'description' => $validated['description'] ?? $project->description,
                'image' => $imagePath,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Project updated successfully',
                'data' => $project
            ], 200);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error updating project: ' . $e->getMessage()
            ], 500);
        }
    }

    // DELETE project
    public function destroy($id)
    {
        try {
            $project = Project::findOrFail($id);

            // Delete image if exists
            if ($project->image && \Storage::disk('public')->exists($project->image)) {
                \Storage::disk('public')->delete($project->image);
            }

            $project->delete();

            return response()->json([
                'success' => true,
                'message' => 'Project deleted successfully'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error deleting project: ' . $e->getMessage()
            ], 500);
        }
    }
}